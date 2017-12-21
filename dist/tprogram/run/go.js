"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start_1 = require("../easy/start");
var program_1 = require("../boot/program");
var index_1 = require("../../tnode/index");
var RunGo = /** @class */ (function () {
    function RunGo() {
    }
    RunGo.run = function (arg) {
        start_1.EasyStart.start();
        var oConfig = program_1.BootProgram.upGoConfig();
        var sConfigFile = index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upBinPath(), "dist", "ulocal", "gulp", "go.js");
        console.log(sConfigFile);
        index_1.TNodeProtoProcess.spawnSync("./node_modules/.bin/gulp", ["--gulpfile=" + sConfigFile], {
            cwd: index_1.TNodeIoPath.upBinPath()
        });
        if (oConfig.projectEnableNative) {
            //QueueNative.run(oConfig);
        }
    };
    return RunGo;
}());
exports.RunGo = RunGo;
