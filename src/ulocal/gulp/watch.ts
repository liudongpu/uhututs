var gulp = require('gulp');

//var tsProject = tsGulp.createProject("../../../tsconfig.json");
var watch=require('gulp-watch');
var childProcess = require("child_process");


var sTargetDept="/usr/local/lib/node_modules/uhutu-ts/";









gulp.task('ts:compiler', function() {
    childProcess.spawnSync("tsc",{cwd:"../../../"});

        gulp.src(['../../../dist/**/*']).pipe(
            gulp.dest(sTargetDept+"dist/")
        );
});

gulp.task('watch:ts', ['ts:compiler'], function() {
    gulp.watch("../../../src/**/*.ts", ['ts:compiler']);
});


gulp.task("watch:resources", function () {
    return watch("../../../resources/**/*", { ignoreInitial: false }).pipe(gulp.dest(sTargetDept+"resources/"));
});
gulp.task("watch", ["watch:ts","watch:resources"]);
