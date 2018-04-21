"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("../easy/launch");
var tdaemon_1 = require("../../tdaemon");
var tnode_1 = require("../../tnode");
var program_1 = require("../../air/keep/program");
var tcore_1 = require("../../tcore");
var FeatureStatus = /** @class */ (function () {
    function FeatureStatus() {
    }
    /**
     *
     *
     * @static
     * @param {string} sKey
     * @param {string} sValue
     * @returns {boolean} 返回是否更新
     * @memberof FeatureStatus
     */
    FeatureStatus.checkSignAndUpdate = function (sKey, sValue) {
        var oStatus = this.upStatusContent();
        var bFlag = false;
        if (oStatus.sign[sKey] == undefined || oStatus.sign[sKey] != sValue) {
            oStatus.sign[sKey] = sValue;
            this.saveStatus(oStatus);
            bFlag = true;
        }
        return bFlag;
    };
    FeatureStatus.upStatusContent = function () {
        var sConfigFile = launch_1.EasyLaunch.upSubPathForGenerate(tnode_1.TNodeIoFile.pathJoin(tdaemon_1.TBase.defineBase().pathDevSettings, tdaemon_1.TBase.defineProgram().fileNameOfStatus));
        var oStatus = null;
        if (tnode_1.TNodeIoFile.flagExist(sConfigFile)) {
            oStatus = tcore_1.TCoreCommonFunc.jsonParse(tnode_1.TNodeIoFile.readFile(sConfigFile));
        }
        else {
            oStatus = new program_1.KProgramFeatureStatus();
            this.saveStatus(oStatus);
        }
        return oStatus;
    };
    FeatureStatus.saveStatus = function (oStatus) {
        var sConfigFile = launch_1.EasyLaunch.upSubPathForGenerate(tnode_1.TNodeIoFile.pathJoin(tdaemon_1.TBase.defineBase().pathDevSettings, tdaemon_1.TBase.defineProgram().fileNameOfStatus));
        tnode_1.TNodeIoFile.writeFile(sConfigFile, tcore_1.TCoreCommonFunc.jsonStringifyBeautify(oStatus));
    };
    return FeatureStatus;
}());
exports.FeatureStatus = FeatureStatus;
