"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var through = require('through2');
var gutil = require('gulp-util');
var index_1 = require("../../tnode/index");
var job_1 = require("../../air/keep/job");
var index_2 = require("../../tjob/index");
var index_3 = require("../../tcore/index");
var GulpParse = /** @class */ (function () {
    function GulpParse() {
    }
    GulpParse.gulpContent = function (oLocalConfig, oParse) {
        return through.obj(function (file, enc, cb) {
            // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
            if (file.isNull()) {
                this.push(file);
                return cb();
            }
            // 插件不支持对 Stream 对直接操作，跑出异常
            if (file.isStream()) {
                this.emit('error', new gutil.PluginError("GulpPlus", 'Streaming not supported'));
                return cb();
            }
            // 将文件内容转成字符串，并调用 preprocess 组件进行预处理 然后将处理后的字符串，再转成Buffer形式
            var oParseFile = new job_1.KJobFileInfo();
            oParseFile.content = file
                .contents
                .toString();
            oParseFile.name = index_1.TNodeIoFile.upBaseName(file.relative, undefined);
            //oParseFile.path = TNodeIoFile.upBaseName(file.relative, undefined);
            oParseFile.path = file.history[0];
            if (oParseFile.path) {
                var sTsFile = index_3.TCoreHelperString.subStringBeforeLast(oParseFile.path, ".") + ".ts";
                if (index_1.TNodeIoFile.flagExist(sTsFile)) {
                    oParseFile.script = index_1.TNodeIoFile.readFile(sTsFile);
                }
                else {
                    oParseFile.script = "";
                }
            }
            //var content = initWork.parseContent(oConfig, oParseFile);
            var content = index_2.TJobSupportParse.contentParse(oLocalConfig, oParseFile, oParse);
            file.contents = new Buffer(content);
            // 下面这两句基本是标配啦，可以参考下 through2 的API
            this.push(file);
            cb();
        });
    };
    return GulpParse;
}());
exports.GulpParse = GulpParse;
