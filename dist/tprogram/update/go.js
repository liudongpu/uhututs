"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../air/model/config");
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var program_1 = require("../boot/program");
var UpdateGo = /** @class */ (function () {
    function UpdateGo() {
    }
    UpdateGo.update = function (args) {
        this.generateConfig();
        var oConfig = program_1.BootProgram.upGoConfig();
        if (oConfig.projectEnableNative) {
            this.installNative(oConfig);
        }
    };
    /**
     * 生成配置文件
     *
     * @private
     * @static
     * @memberof UpdateGo
     */
    UpdateGo.generateConfig = function () {
        var sConfigFile = launch_1.EasyLaunch.upDevPathForSetting(index_1.TBase.defineProgram().fileNameOfConfig);
        var oConfigCurrent = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(sConfigFile));
        var oDefaultConfig = config_1.AModelConfig.upConfig();
        oConfigCurrent = index_1.TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);
        var sGenerateFile = launch_1.EasyLaunch.upSubPathForGenerate(index_2.TNodeIoFile.pathJoin(index_1.TBase.defineBase().pathDevSettings, index_1.TBase.defineProgram().fileNameOfConfig));
        index_2.TNodeIoFile.writeFile(sGenerateFile, index_1.TCoreCommonFunc.jsonStringify(oConfigCurrent));
        config_1.AModelConfig.initConfig(oConfigCurrent);
    };
    UpdateGo.installNative = function (oConfig) {
        var sNativePath = launch_1.EasyLaunch.upGoNativePath("");
        if (!index_2.TNodeIoFile.flagExist(sNativePath)) {
            index_2.TNodeProtoProcess.spawnSync("react-native", ["init", program_1.BootProgram.upGoWorkOfNative()]);
        }
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
