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
        if (!index_1.TnodeIoFile.flagExist(sDir)) {
            index_1.TnodeIoFile.mkdir(sDir);
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
        if (!index_1.TnodeIoFile.flagExist(sDir)) {
            index_1.TnodeIoFile.mkdir(sDir);
        }
        var sConfigFile = launch_1.EasyLaunch.upDevPathForSetting(index_2.TBase.defineProgram().fileNameOfConfig);
        var bFlagExistConfigFile = index_1.TnodeIoFile.flagExist(sConfigFile);
        if (!bFlagExistConfigFile || arg.force) {
            var oConfigCurrent = index_2.TCoreHelperObject.parseTs({});
            if (bFlagExistConfigFile) {
                oConfigCurrent = index_2.TCoreCommonFunc.jsonParse(index_1.TnodeIoFile.readFile(sConfigFile));
            }
            var oConfigDefault = index_2.TCoreCommonFunc.jsonParse(index_1.TnodeIoFile.readFile(launch_1.EasyLaunch.upResourcePath("files-go/setting/config.json")));
            oConfigDefault.projectBaseName = index_1.TnodeIoFile.upBaseName(index_1.TnodeIoPath.upCwdPath(), "");
            oConfigCurrent = index_2.TCoreHelperObject.assign(oConfigDefault, oConfigCurrent);
            index_1.TnodeIoFile.writeFile(sConfigFile, index_2.TCoreCommonFunc.jsonStringify(oConfigCurrent));
        }
        return true;
    };
    return VendInit;
}());
exports.VendInit = VendInit;
