"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./../queue/native");
var start_1 = require("../easy/start");
var program_1 = require("../boot/program");
var RunGo = /** @class */ (function () {
    function RunGo() {
    }
    RunGo.run = function (arg) {
        start_1.EasyStart.start();
        var oConfig = program_1.BootProgram.upGoConfig();
        if (oConfig.projectEnableNative) {
            native_1.QueueNative.run(oConfig);
        }
    };
    return RunGo;
}());
exports.RunGo = RunGo;
