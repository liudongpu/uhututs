"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("./../process/path");
var file_1 = require("./../easy/file");
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
            index_2.TNodeProtoProcess.spawnSync("react-native", [
                "init", program_1.BootProgram.upGoWorkOfNative()
            ]);
        }
        package_1.ProcessPackage.checkOrUpdate(index_2.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfNative(), index_1.TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/macros/native.mustache"), launch_1.EasyLaunch.upDevPathForResources("macro/native.mustache"));
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/indexs/App.js"), launch_1.EasyLaunch.upGoNativePath("App.js"));
        this.updatePagesNavigation();
    };
    UpdateGo.updatePagesNavigation = function () {
        var aFileInfo = path_1.ProcessPath.upPagesPath();
        var aImport = [];
        var aRoute = [];
        aFileInfo.forEach(function (fItem) {
            aImport.push(fItem.importName);
            aRoute.push(fItem.screenName);
        });
        var sFilePath = launch_1.EasyLaunch.upGoNativePath("App.js");
        index_2.TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: index_1.TBase
                .defineBase()
                .replaceAutoBegin + "import",
            textEnd: index_1.TBase
                .defineBase()
                .replaceAutoEnd + "import",
            textReplace: aImport.join('\r\n')
        });
        index_2.TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: index_1.TBase
                .defineBase()
                .replaceAutoBegin + "route",
            textEnd: index_1.TBase
                .defineBase()
                .replaceAutoEnd + "route",
            textReplace: aRoute.join('\r\n')
        });
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
