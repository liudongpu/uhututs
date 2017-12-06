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
        else {
            index_2.Tbase.logWarn(3711001, [sDir]);
        }
        file_1.EasyFile.copyFileAndReplace(launch_1.EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), launch_1.EasyLaunch.upSubPath('') + ".gitignore");
        return true;
    };
    return VendInit;
}());
exports.VendInit = VendInit;
