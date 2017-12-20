"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../air/model/config");
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var UpdateGo = /** @class */ (function () {
    function UpdateGo() {
    }
    UpdateGo.update = function (args) {
        this.generateConfig();
    };
    UpdateGo.generateConfig = function () {
        var sConfigFile = launch_1.EasyLaunch.upDevPathForSetting(index_1.TBase.defineProgram().fileNameOfConfig);
        var oConfigCurrent = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(sConfigFile));
        var oDefaultConfig = config_1.AModelConfig.upConfig();
        oConfigCurrent = index_1.TCoreHelperObject.assign(oDefaultConfig, oConfigCurrent);
        var sGenerateFile = launch_1.EasyLaunch.upSubPathForGenerate(index_2.TNodeIoFile.pathJoin(index_1.TBase.defineBase().pathDevSetting, index_1.TBase.defineProgram().fileNameOfConfig));
        index_2.TNodeIoFile.writeFile(sGenerateFile, index_1.TCoreCommonFunc.jsonStringify(oConfigCurrent));
        config_1.AModelConfig.initConfig(oConfigCurrent);
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
