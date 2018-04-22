var gulp = require('gulp');
var tsGulp = require("gulp-typescript");
//var tsProject = tsGulp.createProject("../../../tsconfig.json");
var watch = require('gulp-watch');
var childProcess = require("child_process");
var sTargetDept = "/usr/local/lib/node_modules/uhutu-ts/";
var tsProject = tsGulp.createProject("tsconfig.json");
gulp.task("adapter:compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsProject.options.outDir));
});
gulp.task('watch:ts', ['adapter:compile'], function () {
    gulp.watch("src/**/*", ['adapter:compile']);
});
gulp.task("watch:resources", function () {
    return watch("resources/**/*", { ignoreInitial: false }).pipe(gulp.dest(sTargetDept + "resources/"));
});
gulp.task("adapter", ["watch:ts", "watch:resources"]);
