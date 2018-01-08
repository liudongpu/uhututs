var gulp = require('gulp');
var tsGulp = require("gulp-typescript");
//var tsProject = tsGulp.createProject("../../../tsconfig.json");
var watch = require('gulp-watch');
var childProcess = require("child_process");
var sTargetDept = "/usr/local/lib/node_modules/uhutu-ts/";
gulp.task("world:compile", function () {
    var tsProject = tsGulp.createProject("../../../resource/files-project/ts/tsconfig.json");
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsProject.options.outDir));
});
gulp.task("ts:copy", function () {
    return gulp.src(['../../../**/*', '!../../../node_modules/**/*', '!../../../.git/**/*']).pipe(gulp.dest(sTargetDept));
});
gulp.task("world", ["world:compile"]),
    gulp.task("watch:ts", function () {
        return watch("../../../src/**/*.ts", { ignoreInitial: false }, function (s) {
            childProcess.spawnSync("tsc", { cwd: "../../../" });
            gulp.src(['../../../dist/**/*']).pipe(gulp.dest(sTargetDept + "dist/"));
        });
    });
gulp.task("watch:resources", function () {
    return watch("../../../resources/**/*", { ignoreInitial: false }).pipe(gulp.dest(sTargetDept + "resources/"));
});
gulp.task("watch", ["watch:ts", "watch:resources"]);
