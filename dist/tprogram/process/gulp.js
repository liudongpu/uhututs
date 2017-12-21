"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program_1 = require("./../boot/program");
var launch_1 = require("./../easy/launch");
var gulp = require("gulp");
var rename = require("gulp-rename");
var watch = require("gulp-watch");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var parse_1 = require("../gulp/parse");
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
var ProcessGulp = /** @class */ (function () {
    function ProcessGulp() {
    }
    ProcessGulp.prototype.initStart = function () {
        oLocalConfig = program_1.BootProgram.upGoConfig();
        this.initGulp();
        this.taskConnect();
        this.taskHtml();
        this.taskSass();
        this.taskStatic();
        //this.taskWatch();
        this.taskDefault();
    };
    ProcessGulp.prototype.initGulp = function () {
        oGulpDefine.pathSass = [launch_1.EasyLaunch.upDevPathForPages("") + "/**/*.scss"];
        oGulpDefine.pathHtml = [launch_1.EasyLaunch.upDevPathForPages("") + '/**/*.html'];
        oGulpDefine.pathStatic = [launch_1.EasyLaunch.upResourcePath("") + '/**/*'];
    };
    /**
     * 监听任务  该任务已删除 替换为gulp-watch插件进行监听修改
     */
    ProcessGulp.prototype.taskWatch = function () {
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
    ProcessGulp.prototype.taskConnect = function () { };
    ProcessGulp.prototype.taskHtml = function () {
        var oTask = new GulpTask("main_html");
        if (oLocalConfig.projectEnableNative) {
            oTask
                .inSubTask("react", function () {
                return watch(oGulpDefine.pathHtml, { ignoreInitial: false })
                    .pipe(parse_1.GulpParse.gulpContent(oLocalConfig, index_2.TBase.defineBase().workNative))
                    .pipe(rename({ extname: ".js" }))
                    .pipe(gulp.dest(index_1.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfNative(), index_2.TBase.defineBase().pathDevPages)));
                //.pipe(function(cb){console.log('aa');});
            });
        }
        oTask.inTopTask();
    };
    ProcessGulp.prototype.taskStatic = function () { };
    ProcessGulp.prototype.taskSass = function () { };
    ProcessGulp.prototype.taskDefault = function () {
        gulp.task('default', oGulpDefine.task_default);
    };
    return ProcessGulp;
}());
exports.ProcessGulp = ProcessGulp;
