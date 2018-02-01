"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var path_1 = require("./../process/path");
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
        this.pageImport(oConfig);
    };
    QueueWeapp.pageImport = function (oConfig) {
        var aFileInfo = path_1.ProcessPath.upPagesPath();
        var aImport = [];
        aFileInfo.forEach(function (fItem) {
            aImport.push(fItem.filePath);
        });
        var sProjectFile = launch_1.EasyLaunch.upGoWeappPath("app.json");
        var oAppJson = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(sProjectFile));
        oAppJson.pages = aImport;
        index_2.TNodeIoFile.writeFile(sProjectFile, index_1.TCoreCommonFunc.jsonStringifyBeautify(oAppJson));
    };
    return QueueWeapp;
}());
exports.QueueWeapp = QueueWeapp;
