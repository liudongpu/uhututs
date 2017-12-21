"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var program_1 = require("../boot/program");
var EasyLaunch = /** @class */ (function () {
    function EasyLaunch() {
    }
    EasyLaunch.upSubPath = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upCwdPath(), index_2.TBase.defineBase().pathRoot, sPath);
    };
    EasyLaunch.upSubPathForTemp = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(this.upSubPath(index_2.TBase.defineBase().pathRootTemp), sPath);
    };
    EasyLaunch.upSubPathForGenerate = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(this.upSubPath(index_2.TBase.defineBase().pathRootGenerate), sPath);
    };
    EasyLaunch.upSubPathForTempGit = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(this.upSubPathForTemp(index_2.TBase.defineBase().pathRootTempGit), sPath);
    };
    EasyLaunch.upResourcePath = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upResourcePath(), sPath);
    };
    EasyLaunch.upDevPath = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upCwdPath(), index_2.TBase.defineBase().pathDev, sPath);
    };
    EasyLaunch.upDevPathForSetting = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(this.upDevPath(index_2.TBase.defineBase().pathDevSetting), sPath);
    };
    EasyLaunch.upDevPathForPages = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(this.upDevPath(index_2.TBase.defineBase().pathDevPages), sPath);
    };
    EasyLaunch.upGoNativePath = function (sPath) {
        return index_1.TNodeIoFile.pathJoin(index_1.TNodeIoPath.upCwdPath(), program_1.BootProgram.upGoWorkOfNative(), sPath);
    };
    return EasyLaunch;
}());
exports.EasyLaunch = EasyLaunch;
