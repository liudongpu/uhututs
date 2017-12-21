"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var index_2 = require("../../tcore/index");
var file_1 = require("../easy/file");
var VendInit = /** @class */ (function () {
    function VendInit() {
    }
    VendInit.initProgram = function (arg) {
        var sDir = launch_1.EasyLaunch.upSubPath('');
        index_2.TBase.logDebug(3411002, [sDir]);
        if (!index_1.TNodeIoFile.flagExist(sDir)) {
            index_1.TNodeIoFile.mkdir(sDir);
        }
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), launch_1.EasyLaunch.upSubPath('.gitignore'));
        if (arg.init === index_2.TBase.defineBase().projectGo) {
            VendInit.initGo(arg);
        }
        return true;
    };
    VendInit.initGo = function (arg) {
        var sDir = launch_1.EasyLaunch.upDevPath('');
        index_2.TBase.logDebug(3411004, [sDir]);
        if (!index_1.TNodeIoFile.flagExist(sDir)) {
            index_1.TNodeIoFile.mkdir(sDir);
        }
        var sConfigFile = launch_1.EasyLaunch.upDevPathForSetting(index_2.TBase.defineProgram().fileNameOfConfig);
        var bFlagExistConfigFile = index_1.TNodeIoFile.flagExist(sConfigFile);
        if (!bFlagExistConfigFile || arg.force) {
            var oConfigCurrent = index_2.TCoreHelperObject.parseTs({});
            if (bFlagExistConfigFile) {
                oConfigCurrent = index_2.TCoreCommonFunc.jsonParse(index_1.TNodeIoFile.readFile(sConfigFile));
            }
            var oConfigDefault = index_2.TCoreCommonFunc.jsonParse(index_1.TNodeIoFile.readFile(launch_1.EasyLaunch.upResourcePath("files-go/setting/config.json")));
            oConfigDefault.projectBaseName = index_1.TNodeIoFile.upBaseName(index_1.TNodeIoPath.upCwdPath(), "");
            oConfigCurrent = index_2.TCoreHelperObject.assign(oConfigDefault, oConfigCurrent);
            index_1.TNodeIoFile.writeFile(sConfigFile, index_2.TCoreCommonFunc.jsonStringify(oConfigCurrent));
            index_2.TBase.logInfo(3611001);
        }
        if (!index_1.TNodeIoFile.flagExist(launch_1.EasyLaunch.upDevPathForPages(""))) {
            index_1.TNodeIoFile.mkdir(launch_1.EasyLaunch.upDevPathForPages(""));
        }
        return true;
    };
    return VendInit;
}());
exports.VendInit = VendInit;
