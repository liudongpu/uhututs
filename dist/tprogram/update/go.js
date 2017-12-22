"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tnode/index");
var program_1 = require("../boot/program");
var start_1 = require("../easy/start");
var UpdateGo = /** @class */ (function () {
    function UpdateGo() {
    }
    UpdateGo.update = function (args) {
        start_1.EasyStart.start();
        var oConfig = program_1.BootProgram.upGoConfig();
        if (oConfig.projectEnableNative) {
            this.installNative(oConfig);
        }
    };
    UpdateGo.installNative = function (oConfig) {
        var sNativePath = launch_1.EasyLaunch.upGoNativePath("");
        if (!index_1.TNodeIoFile.flagExist(sNativePath)) {
            index_1.TNodeProtoProcess.spawnSync("react-native", ["init", program_1.BootProgram.upGoWorkOfNative()]);
        }
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
