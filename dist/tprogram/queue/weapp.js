"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var QueueWeapp = /** @class */ (function () {
    function QueueWeapp() {
    }
    QueueWeapp.run = function (oConfig) {
    };
    QueueWeapp.update = function (oConfig) {
        var sWeappPath = launch_1.EasyLaunch.upGoWeappPath("");
        if (!index_2.TNodeIoFile.flagExist(sWeappPath)) {
            index_2.TNodeIoFile.copyDir(launch_1.EasyLaunch.upResourcePath("init-weapp"), sWeappPath);
        }
        var sProjectFile = launch_1.EasyLaunch.upGoWeappPath("project.config.json");
        var oJsonProject = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(sProjectFile));
        oJsonProject.projectname = oConfig.projectBaseName;
        oJsonProject.appid = oConfig.envWeappId;
        index_2.TNodeIoFile.writeFile(sProjectFile, index_1.TCoreCommonFunc.jsonStringifyBeautify(oJsonProject));
    };
    return QueueWeapp;
}());
exports.QueueWeapp = QueueWeapp;
