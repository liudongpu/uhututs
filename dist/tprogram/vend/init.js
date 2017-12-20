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
        index_2.Tbase.logDebug(3411002, [sDir]);
        if (!index_1.TnodeIoFile.flagExist(sDir)) {
            index_1.TnodeIoFile.mkdir(sDir);
        }
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), launch_1.EasyLaunch.upSubPath('.gitignore'));
        if (arg.init === index_2.Tbase.defineBase().projectGo) {
            VendInit.initGo(arg);
        }
        return true;
    };
    VendInit.initGo = function (arg) {
        var sDir = launch_1.EasyLaunch.upDevPath('');
        index_2.Tbase.logDebug(3411002, [sDir]);
        if (!index_1.TnodeIoFile.flagExist(sDir)) {
            index_1.TnodeIoFile.mkdir(sDir);
        }
        return true;
    };
    return VendInit;
}());
exports.VendInit = VendInit;
