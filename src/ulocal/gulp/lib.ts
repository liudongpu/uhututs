var gulp = require('gulp');
var tsGulp = require("gulp-typescript");
//var tsProject = tsGulp.createProject("../../../tsconfig.json");
var watch=require('gulp-watch');
var childProcess = require("child_process");

var sTargetDept="/usr/local/lib/node_modules/uhutu-ts/";


var tsProject = tsGulp.createProject("lib-tsconfig.json");


gulp.task("lib:compile", function () {
    
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsProject.options.outDir))
        .pipe(gulp.dest(sTargetDept+"lib/"))
        ;
});

gulp.task('watch:lib', ['lib:compile'], function() {
    gulp.watch("src/**/*", ['lib:compile']);
});


gulp.task("lib",["lib:compile"]);
