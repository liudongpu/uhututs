
import {IConfigInfo} from './../../air/interfaces/config';

import gulp = require('gulp');
import sass = require('gulp-sass');
import connect = require('gulp-connect');
import rename = require('gulp-rename');
import watch = require('gulp-watch');
import {TNodeIoFile} from '../../tnode/index';
import {TBase} from '../../tcore/index';
import { TProgramBootProgram, TprogramEasyLanch, TProgramGulpParse, TProgramEasyStart } from '../../tprogram/index';

let oGulpDefine = {
    pathSass: [],
    pathHtml: [],
    pathStatic: [],
    task_default: []
};

let oLocalConfig : IConfigInfo;

class GulpTask {

    taskName : string = ""

    subTask : string[] = []

    constructor(sTaskName : string) {
        this.taskName = sTaskName;

    }
    inSubTask(sSubTaskName : string, fTaskFunction : Function) : string {

        var sSubName = this.taskName + ":" + sSubTaskName;
        this
            .subTask
            .push(sSubName);

        gulp.task(sSubName, fTaskFunction);

        return sSubName;

    }
    inTopTask() {

        gulp.task(this.taskName, this.subTask);
        oGulpDefine
            .task_default
            .push(this.taskName);

    }

}

 class GulpGo {

    initStart() {

     

       TProgramEasyStart.refreshConfig();
        oLocalConfig=TProgramBootProgram.upGoConfig();

        this.initGulp();
        this.taskConnect();
        this.taskHtml();
        this.taskSass();
        this.taskStatic();
        //this.taskWatch();
        this.taskDefault();
    }

    initGulp() {
        oGulpDefine.pathSass = [TprogramEasyLanch.upDevPathForPages("") + "/**/*.scss"];
        oGulpDefine.pathHtml = [TprogramEasyLanch.upDevPathForPages("") + '/**/*.html'];

        oGulpDefine.pathStatic = [TprogramEasyLanch.upResourcePath("") + '/**/*'];

    }

    /**
     * 监听任务  该任务已删除 替换为gulp-watch插件进行监听修改
     */
    taskWatch() {

        var oTask = new GulpTask("main_watch");

        oTask.inSubTask("sass", function () {
            gulp.watch(oGulpDefine.pathSass, ['main_sass']);
        });

        oTask.inSubTask("html", function () {
            gulp.watch(oGulpDefine.pathHtml, ['main_html']);
        });

        oTask.inSubTask("static", function () {
            gulp.watch(oGulpDefine.pathHtml, ['main_static']);
        });

        oTask.inTopTask();
    }

    taskConnect() {}

    taskHtml() {

        var oTask = new GulpTask("main_html");

        if (oLocalConfig.projectEnableNative) {

            oTask
                .inSubTask(TBase.defineBase().workNative, function () {
                    return watch(oGulpDefine.pathHtml, {ignoreInitial: false})
                        .pipe(TProgramGulpParse.gulpContent(oLocalConfig, TBase.defineBase().workNative))
                        .pipe(rename({extname: ".js"}))
                        .pipe(gulp.dest(TNodeIoFile.pathJoin(TProgramBootProgram.upGoWorkOfNative(), TBase.defineBase().pathDevPages)))
                        //.pipe(function(cb){console.log('aa');});
                    });
            }

        oTask.inTopTask();

    }

    taskStatic() {}

    taskSass() {}

    taskDefault() {
        gulp.task('default', oGulpDefine.task_default);
    }

}



let oGulpGo=new GulpGo();

oGulpGo.initStart();