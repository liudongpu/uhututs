"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var program_1 = require("../boot/program");
var path_1 = require("./../process/path");
var file_1 = require("./../easy/file");
var package_1 = require("./../process/package");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var index_3 = require("../../tdaemon/index");
var QueueNative = /** @class */ (function () {
    function QueueNative() {
    }
    QueueNative.run = function (oConfig) {
        index_2.TNodeProtoProcess.spawn("npm", ["start"], { cwd: program_1.BootProgram.upGoWorkOfNative() });
    };
    QueueNative.update = function (oConfig) {
        var sNativePath = launch_1.EasyLaunch.upGoNativePath("");
        if (!index_2.TNodeIoFile.flagExist(sNativePath)) {
            index_2.TNodeProtoProcess.spawnSync("react-native", ["init",
                program_1.BootProgram.upGoWorkOfNative()
            ]);
        }
        else {
            package_1.ProcessPackage.checkOrUpdate(index_2.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfNative(), index_3.TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);
            file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/macros/native.mustache"), launch_1.EasyLaunch.upDevPathForResources("macro/native.mustache"));
            file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-go/indexs/App.js"), launch_1.EasyLaunch.upGoNativePath("App.js"));
            this.updatePagesNavigation();
            this.processScript(oConfig);
        }
    };
    QueueNative.updatePagesNavigation = function () {
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
            textBegin: index_3.TBase
                .defineBase()
                .replaceAutoBegin + "import",
            textEnd: index_3.TBase
                .defineBase()
                .replaceAutoEnd + "import",
            textReplace: aImport.join('\r\n')
        });
        index_2.TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: index_3.TBase
                .defineBase()
                .replaceAutoBegin + "route",
            textEnd: index_3.TBase
                .defineBase()
                .replaceAutoEnd + "route",
            textReplace: aRoute.join('\r\n')
        });
    };
    QueueNative.processScript = function (oConfig) {
        var baseIndex = "import {WNativeGuideBook} from '../adapter/wnative/index';export {WNativeGuideBook as guidebook};";
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upGoNativePath("scripts/base/index.js"), baseIndex);
        var oTsConfig = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(launch_1.EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));
        oTsConfig.compilerOptions.rootDir = index_2.TNodeIoPath.upBinPath() + "/src/";
        oTsConfig.include = [index_2.TNodeIoPath.upBinPath() + "/src/wnative/**/*", index_2.TNodeIoPath.upBinPath() + "/src/tcore/**/*"];
        oTsConfig.compilerOptions.outDir = launch_1.EasyLaunch.upGoNativePath("scripts/adapter");
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upSubPathForGenerate("ts-src-native/tsconfig.json"), index_1.TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));
        //这里忽略掉报错信息
        index_2.TNodeProtoProcess.spawnSync("tsc", [], { cwd: launch_1.EasyLaunch.upSubPathForGenerate("ts-src-native"), "stdio": "" });
        //TNodeIoFile.copyDir(TNodeIoPath.upBinPath()+"/dist/wnative",EasyLaunch.upGoNativePath("scripts/adapter/wnative"));
        //TNodeIoFile.copyDir(TNodeIoPath.upBinPath()+"/dist/tcore",EasyLaunch.upGoNativePath("scripts/adapter/tcore"));
    };
    return QueueNative;
}());
exports.QueueNative = QueueNative;
