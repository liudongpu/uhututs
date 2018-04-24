"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./../queue/native");
var start_1 = require("../easy/start");
var program_1 = require("../boot/program");
var index_1 = require("../../tnode/index");
var weapp_1 = require("../queue/weapp");
var site_1 = require("../queue/site");
var RunGo = /** @class */ (function () {
    function RunGo() {
    }
    RunGo.run = function (arg) {
        start_1.EasyStart.refreshConfig();
        var oConfig = program_1.BootProgram.upGoConfig();
        this.startParse(oConfig);
        if (oConfig.projectEnableNative) {
            native_1.QueueNative.run(oConfig);
        }
        if (oConfig.projectEnableWeapp) {
            weapp_1.QueueWeapp.run(oConfig);
        }
        if (oConfig.projectEnableSite) {
            site_1.QueueSite.run(oConfig);
        }
    };
    /**
     * 启动转换逻辑代码
     *
     * @private
     * @static
     * @param {IConfigInfo} oConfig
     * @memberof RunGo
     */
    RunGo.startParse = function (oConfig) {
        var sConfigFile = index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upBinPath(), "dist", "ulocal", "gulp", "go.js");
        var sGulp = index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upBinPath(), "node_modules", ".bin", "gulp");
        index_1.TNodeProtoProcess.spawn(sGulp, ["--gulpfile=" + sConfigFile, "--cwd=" + index_1.TNodeIoPath.upCwdPath()], { cwd: index_1.TNodeIoPath.upCwdPath() });
    };
    return RunGo;
}());
exports.RunGo = RunGo;
