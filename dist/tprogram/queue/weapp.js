"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var path_1 = require("./../process/path");
var file_1 = require("./../easy/file");
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
        this.processScript(oConfig);
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/macros/weapp.mustache"), launch_1.EasyLaunch.upDevPathForResources("macro/weapp.mustache"));
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/macros/weapp_js.mustache"), launch_1.EasyLaunch.upDevPathForResources("macro/weapp_js.mustache"));
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
    QueueWeapp.processScript = function (oConfig) {
        var baseIndex = "import {GuideBook} from '../adapter/wweapp/guide/book';export {GuideBook as guidebook};";
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upGoWeappPath("scripts/base/index.js"), baseIndex);
        var oTsConfig = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(launch_1.EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));
        oTsConfig.compilerOptions.rootDir = index_2.TNodeIoPath.upBinPath() + "/src/";
        oTsConfig.include = [index_2.TNodeIoPath.upBinPath() + "/src/wweapp/**/*", index_2.TNodeIoPath.upBinPath() + "/src/tcore/**/*"];
        oTsConfig.compilerOptions.outDir = launch_1.EasyLaunch.upGoWeappPath("scripts/adapter");
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upSubPathForGenerate("ts-src-weapp/tsconfig.json"), index_1.TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));
        index_2.TNodeProtoProcess.spawnSync("tsc", [], { cwd: launch_1.EasyLaunch.upSubPathForGenerate("ts-src-weapp") });
    };
    return QueueWeapp;
}());
exports.QueueWeapp = QueueWeapp;
