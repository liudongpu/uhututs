"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var site_1 = require("./../queue/site");
var weapp_1 = require("./../queue/weapp");
var native_1 = require("./../queue/native");
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
        this.copySrcTs(oConfig);
        if (oConfig.projectEnableNative) {
            native_1.QueueNative.update(oConfig);
        }
        if (oConfig.projectEnableWeapp) {
            weapp_1.QueueWeapp.update(oConfig);
        }
        if (oConfig.projectEnableSite) {
            site_1.QueueSite.update(oConfig);
        }
    };
    UpdateGo.copySrcTs = function (oConfig) {
        index_2.TNodeIoFile.copyFile(index_2.TNodeIoPath.upBinPath() + "/src/air/interfaces/guide.ts", launch_1.EasyLaunch.upDevPathForScripts("base/guide.ts"));
        index_2.TNodeIoFile.copyFile(index_2.TNodeIoPath.upBinPath() + "/src/air/interfaces/frame.ts", launch_1.EasyLaunch.upDevPathForScripts("base/frame.ts"));
        var baseIndex = "\n        import {IGuideBook} from \"./guide\";\n        var guidebook:IGuideBook;\n        export {guidebook};";
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upDevPathForScripts("base/index.ts"), baseIndex);
        var oTsConfig = index_1.TCoreCommonFunc.jsonParse(index_2.TNodeIoFile.readFile(launch_1.EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));
        oTsConfig.compilerOptions.rootDir = launch_1.EasyLaunch.upDevPathForScripts("");
        oTsConfig.include = [launch_1.EasyLaunch.upDevPathForScripts("") + "/**/*"];
        oTsConfig.compilerOptions.outDir = launch_1.EasyLaunch.upSubPathForGenerate("ts-dev-dist");
        index_2.TNodeIoFile.writeFile(launch_1.EasyLaunch.upSubPathForGenerate("ts-dev/tsconfig.json"), index_1.TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));
        //TNodeIoFile.copyDir(TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(),"src"),EasyLaunch.upSubPathForGenerate("ts-src"));
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
