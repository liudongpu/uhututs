"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var reactNativeStylesheetCss = require("gulp-react-native-stylesheet-css");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var index_3 = require("../../tprogram/index");
var oGulpDefine = {
    pathSass: [],
    pathHtml: [],
    pathStatic: [],
    task_default: []
};
var oLocalConfig;
var GulpTask = /** @class */ (function () {
    function GulpTask(sTaskName) {
        this.taskName = "";
        this.subTask = [];
        this.taskName = sTaskName;
    }
    GulpTask.prototype.inSubTask = function (sSubTaskName, fTaskFunction) {
        var sSubName = this.taskName + ":" + sSubTaskName;
        this
            .subTask
            .push(sSubName);
        gulp.task(sSubName, fTaskFunction);
        return sSubName;
    };
    GulpTask.prototype.inTopTask = function () {
        gulp.task(this.taskName, this.subTask);
        oGulpDefine
            .task_default
            .push(this.taskName);
    };
    return GulpTask;
}());
var GulpGo = /** @class */ (function () {
    function GulpGo() {
    }
    GulpGo.prototype.initStart = function () {
        index_3.TProgramEasyStart.refreshConfig();
        oLocalConfig = index_3.TProgramBootProgram.upGoConfig();
        this.initGulp();
        this.taskConnect();
        this.taskHtml();
        this.taskSass();
        this.taskStatic();
        //this.taskWatch();
        this.taskDefault();
    };
    GulpGo.prototype.initGulp = function () {
        oGulpDefine.pathSass = [index_3.TprogramEasyLanch.upDevPathForPages("") + "/**/*.scss"];
        oGulpDefine.pathHtml = [index_3.TprogramEasyLanch.upDevPathForPages("") + '/**/*.html'];
        oGulpDefine.pathStatic = [index_3.TprogramEasyLanch.upResourcePath("") + '/**/*'];
    };
    /**
     * 监听任务  该任务已删除 替换为gulp-watch插件进行监听修改
     */
    GulpGo.prototype.taskWatch = function () {
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
    };
    GulpGo.prototype.taskConnect = function () { };
    GulpGo.prototype.taskHtml = function () {
        var oTask = new GulpTask("main_html");
        if (oLocalConfig.projectEnableNative) {
            oTask
                .inSubTask(index_2.TBase.defineBase().workNative, function () {
                return watch(oGulpDefine.pathHtml, { ignoreInitial: false })
                    .pipe(index_3.TProgramGulpParse.gulpContent(oLocalConfig, index_2.TBase.defineBase().workNative))
                    .pipe(rename({ extname: ".js" }))
                    .pipe(gulp.dest(index_1.TNodeIoFile.pathJoin(index_3.TProgramBootProgram.upGoWorkOfNative(), index_2.TBase.defineBase().pathDevPages)));
                //.pipe(function(cb){console.log('aa');});
            });
        }
        oTask.inTopTask();
    };
    GulpGo.prototype.taskStatic = function () { };
    GulpGo.prototype.taskSass = function () {
        var oTask = new GulpTask("main_sass");
        if (oLocalConfig.projectEnableNative) {
            oTask.inSubTask(index_2.TBase.defineBase().workNative, function () {
                return watch(oGulpDefine.pathSass, { ignoreInitial: false })
                    .pipe(sass().on('error', sass.logError))
                    .pipe(reactNativeStylesheetCss())
                    .pipe(rename({
                    suffix: "-style",
                    extname: ".js"
                }))
                    .pipe(gulp.dest(index_1.TNodeIoFile.pathJoin(index_3.TProgramBootProgram.upGoWorkOfNative(), index_2.TBase.defineBase().pathDevPages)));
            });
        }
        oTask.inTopTask();
    };
    GulpGo.prototype.taskDefault = function () {
        gulp.task('default', oGulpDefine.task_default);
    };
    return GulpGo;
}());
var oGulpGo = new GulpGo();
oGulpGo.initStart();
