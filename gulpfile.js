const del = require("del");
const eventStream = require("event-stream");
const gulp = require("gulp");
const insert = require("gulp-insert");
const merge = require("merge2");
const mocha = require("gulp-mocha");
const mochaPhantomJS = require("gulp-mocha-phantomjs");
const runSequence = require("run-sequence");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const webpack = require("gulp-webpack");

const distTypes = ["amd", "commonjs", "es2015", "system", "umd"];

gulp.task("clean", () => {
    return del([
        "dist/*",
        "src/**/*.js"
    ]);
});

gulp.task("tslint", () => {
    return gulp
        .src(["src/**/*.ts", "!src/**/*.d.ts"])
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

gulp.task("tsc", () => {
    const tsProject = ts.createProject("tsconfig.json");

    return tsProject
        .src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("src"));
});

gulp.task("dist:modules", () => {
    const pipes = {};

    distTypes.forEach(moduleType => {
        const tsProject = ts.createProject(
            "tsconfig.json",
            {
                module: moduleType
            });

        const result = tsProject
            .src()
            .pipe(ts(tsProject));

        pipes[moduleType] = merge([
            result.dts.pipe(gulp.dest(`dist/${moduleType}`)),
            result.js.pipe(gulp.dest(`dist/${moduleType}`))
        ]);
    });

    return eventStream.merge(Object.keys(pipes).map(moduleType => pipes[moduleType]));
});

gulp.task("dist:pack", () => {
    return gulp.src("dist/es2015/**/*.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(insert.prepend("var Gls = "))
        .pipe(insert.append("\nGls = Gls.Gls;"))
        .pipe(gulp.dest("dist/global"));
});

gulp.task("dist", callback => {
    runSequence(
        "dist:modules",
        "dist:pack",
        callback);
});

gulp.task("test:unit", () => {
    return gulp.src("test/unit/**/*.js")
        .pipe(mocha({
            reporter: "spec",
        }));
});

gulp.task("test:integration", () => {
    return gulp.src("test/integration.js")
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("test:end-to-end", () => {
    return gulp.src("test/end-to-end.js")
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("test:browser", () => {
    return gulp.src("test/browser/index.html")
        .pipe(mochaPhantomJS());
})

gulp.task("test", callback => {
    runSequence(
        "test:unit",
        "test:integration",
        "test:end-to-end",
        "test:browser");
});

gulp.task("watch", ["default"], () => {
    gulp.watch("src/**/*.ts", ["default"]);
});

gulp.task("build", callback => {
    runSequence(
        "clean",
        ["tsc", "tslint"],
        "dist",
        "test");
})

gulp.task("default", callback => {
    runSequence("build", "test", callback);
});
