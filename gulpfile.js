var del = require("del");
var gulp = require("gulp");
var gulpTslint = require("gulp-tslint");
var gulpTypeScript = require("gulp-typescript");
var merge = require("merge2");
var mocha = require("gulp-mocha");
var mochaPhantomJS = require("gulp-mocha-phantomjs");
var runSequence = require("run-sequence");
var tslint = require("tslint");
var webpack = require("gulp-webpack");

var getTsProject = (function () {
    var tsProject;

    return function () {
        if (!tsProject) {
            tsProject = gulpTypeScript.createProject("tsconfig.json");
        }

        return tsProject;
    }
})();

gulp.task("clean", function () {
    return del([
        "lib/*",
        "src/**/*.js",
        "test/**/*.js"
    ]);
});

gulp.task("src:tslint", function () {
    var program = tslint.Linter.createProgram("./tsconfig.json");

    return gulp
        .src("src/**/*.ts")
        .pipe(gulpTslint({ program }));
});

gulp.task("src:tsc", function () {
    var tsProject = getTsProject();
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest("lib")),
        tsResult.js.pipe(gulp.dest("lib"))
    ]);
});

gulp.task("src", function (callback) {
    runSequence(
        "clean",
        ["src:tsc", "src:tslint"]);
});

gulp.task("test:tslint", function () {
    var program = tslint.Linter.createProgram("./test/tsconfig.json");

    return gulp
        .src("test/**/*.ts")
        .pipe(gulpTslint({ program }));
});

gulp.task("test:tsc", function () {
    var tsProject = getTsProject();
    var tsResult = gulp.src("test/**/*.ts")
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest("test")),
        tsResult.js.pipe(gulp.dest("test"))
    ]);
});

gulp.task("test:unit", function () {
    return gulp.src("test/unit/**/*.js")
        .pipe(mocha({
            reporter: "spec",
        }));
});

gulp.task("test:integration", function () {
    return gulp.src("test/integration.js")
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("test:end-to-end", function () {
    return gulp.src("test/end-to-end.js")
        .pipe(mocha({
            reporter: "spec"
        }));
});

gulp.task("test", function (callback) {
    runSequence(
        "test:tsc",
        "test:unit",
        "test:integration",
        "test:end-to-end");
});

gulp.task("watch", ["default"], function () {
    gulp.watch("src/**/*.ts", ["src:tsc"]);
    gulp.watch("test/**/*.ts", ["test:tsc"]);
});

gulp.task("default", function (callback) {
    runSequence("src", "test", callback);
});
