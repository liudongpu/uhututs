"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var program_1 = require("../boot/program");
var path_1 = require("./../process/path");
var file_1 = require("./../easy/file");
var package_1 = require("./../process/package");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tdaemon/index");
var QueueNative = /** @class */ (function () {
    function QueueNative() {
    }
    QueueNative.run = function (oConfig) {
        index_1.TNodeProtoProcess.spawn("yarn", ["start"], { cwd: program_1.BootProgram.upGoWorkOfNative() });
    };
    QueueNative.update = function (oConfig) {
        var sNativePath = launch_1.EasyLaunch.upGoNativePath("");
        if (!index_1.TNodeIoFile.flagExist(sNativePath)) {
            index_1.TNodeProtoProcess.spawnSync("create-react-native-app", [
                program_1.BootProgram.upGoWorkOfNative()
            ]);
        }
        else {
            package_1.ProcessPackage.checkOrUpdate(index_1.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfNative(), index_2.TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);
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
        index_1.TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: index_2.TBase
                .defineBase()
                .replaceAutoBegin + "import",
            textEnd: index_2.TBase
                .defineBase()
                .replaceAutoEnd + "import",
            textReplace: aImport.join('\r\n')
        });
        index_1.TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: index_2.TBase
                .defineBase()
                .replaceAutoBegin + "route",
            textEnd: index_2.TBase
                .defineBase()
                .replaceAutoEnd + "route",
            textReplace: aRoute.join('\r\n')
        });
    };
    QueueNative.processScript = function (oConfig) {
        var baseIndex = "import {WNativeGuideBook} from '../adapter/wnative/index';export {WNativeGuideBook as guidebook};";
        index_1.TNodeIoFile.writeFile(launch_1.EasyLaunch.upGoNativePath("scripts/base/index.js"), baseIndex);
        //let oTsConfig=TCoreCommonFunc.jsonParse<any>( TNodeIoFile.readFile(EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));
        //oTsConfig.compilerOptions.rootDir=TNodeIoPath.upBinPath()+"/src/";
        //oTsConfig.include=[TNodeIoPath.upBinPath()+"/src/wnative/**/*",TNodeIoPath.upBinPath()+"/src/tcore/**/*"];
        //oTsConfig.compilerOptions.outDir=EasyLaunch.upGoNativePath("scripts/adapter");
        //TNodeIoFile.writeFile(EasyLaunch.upSubPathForGenerate("ts-src-native/tsconfig.json"),TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));
        //TNodeProtoProcess.spawnSync("tsc", [],{cwd:EasyLaunch.upSubPathForGenerate("ts-src-native")});
        index_1.TNodeIoFile.copyDir(index_1.TNodeIoPath.upBinPath() + "/dist/wnative", launch_1.EasyLaunch.upGoNativePath("scripts/adapter/wnative"));
        index_1.TNodeIoFile.copyDir(index_1.TNodeIoPath.upBinPath() + "/dist/tcore", launch_1.EasyLaunch.upGoNativePath("scripts/adapter/tcore"));
    };
    return QueueNative;
}());
exports.QueueNative = QueueNative;
