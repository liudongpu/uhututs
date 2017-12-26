"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_1 = require("./../process/package");
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
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
        if (!index_2.TNodeIoFile.flagExist(sNativePath)) {
            index_2.TNodeProtoProcess.spawnSync("react-native", ["init", program_1.BootProgram.upGoWorkOfNative()]);
        }
        package_1.ProcessPackage.checkOrUpdate(index_2.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfNative(), index_1.TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
