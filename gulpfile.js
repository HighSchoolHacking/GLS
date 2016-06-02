const eventStream = require("event-stream");
const gulp = require("gulp");
const runSequence = require("run-sequence");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");

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

gulp.task("dist", () => {
    const pipes = {};
    
    ["amd", "commonjs", "es2015", "system", "umd"]
        .forEach(moduleType => {
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

gulp.task("watch", ["default"], () => {
    gulp.watch("src/**/*.ts", ["default"]);
});

gulp.task("default", ["tsc", "tslint", "dist"]);
