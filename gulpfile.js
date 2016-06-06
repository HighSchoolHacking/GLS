const eventStream = require("event-stream");
const gulp = require("gulp");
const insert = require("gulp-insert");
const runSequence = require("run-sequence");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const webpack = require("gulp-webpack");

const distTypes = ["amd", "commonjs", "es2015", "none", "system", "umd"]

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

gulp.task("dist-modules", () => {
    const pipes = {};

    distTypes.forEach(moduleType => {
        const tsProject = ts.createProject(
            "tsconfig.json",
            {
                module: moduleType
            });

        pipes[moduleType] = tsProject
            .src()
            .pipe(ts(tsProject))
            .js.pipe(gulp.dest(`dist/${moduleType}`));
    });

    return eventStream.merge(Object.keys(pipes).map(moduleType => pipes[moduleType]));
});

gulp.task("dist-pack", () => {
    return gulp.src("dist/none/**/*.js")
        .pipe(webpack({
            entry: "./src/gls",
            output: {
                filename: "gls-browser.js",
            }
        }))
        .pipe(insert.prepend(`var GLS = `))
        .pipe(gulp.dest("dist/"));
});

gulp.task("dist", callback => {
    runSequence(
        "dist-modules",
        "dist-pack",
        callback);
});

gulp.task("watch", ["default"], () => {
    gulp.watch("src/**/*.ts", ["default"]);
});

gulp.task("default", callback => {
    runSequence(
        ["tsc", "tslint"],
        "dist",
        callback);
});
