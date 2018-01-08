"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../air/model/config");
var launch_1 = require("./launch");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var index_3 = require("../../tdaemon/index");
var EasyStart = /** @class */ (function () {
    function EasyStart() {
    }
    EasyStart.start = function () {
        this.generateConfig();
    };
    EasyStart.refreshConfig = function () {
        var sGenerateFile = launch_1.EasyLaunch.upSubPathForGenerate(index_2.TNodeIoFile.pathJoin(index_3.TBase.defineBase().pathDevSettings, index_3.TBase.defineProgram().fileNameOfConfig));
        var sContent = index_2.TNodeIoFile.readFile(sGenerateFile);
        var oConfigCurrent = index_1.TCoreCommonFunc.jsonParse(sContent);
        config_1.AModelConfig.initConfig(oConfigCurrent);
    };
    /**
     * 生成配置文件
     *
     * @private
     * @static
     * @memberof UpdateGo
     */
    EasyStart.generateConfig = function () {
        var sConfigFile = launch_1.EasyLaunch.upDevPathForSettings(index_3.TBase.defineProgram().fileNameOfConfig);
        var oConfigCurrent = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(sConfigFile));
        var oDefaultConfig = config_1.AModelConfig.upConfig();
        oConfigCurrent = index_1.TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);
        oConfigCurrent.badgeFlagGenerate = true;
        var sGenerateFile = launch_1.EasyLaunch.upSubPathForGenerate(index_2.TNodeIoFile.pathJoin(index_3.TBase.defineBase().pathDevSettings, index_3.TBase.defineProgram().fileNameOfConfig));
        index_2.TNodeIoFile.writeFile(sGenerateFile, index_1.TCoreCommonFunc.jsonStringifyBeautify(oConfigCurrent));
        this.refreshConfig();
    };
    return EasyStart;
}());
exports.EasyStart = EasyStart;
