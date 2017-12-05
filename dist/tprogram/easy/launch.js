"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var EasyLaunch = (function () {
    function EasyLaunch() {
    }
    EasyLaunch.upSubPath = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(index_1.TnodeIoPath.upCwdPath(), index_2.Tbase.defineBase().pathOfBaseRoot, sPath);
    };
    EasyLaunch.upResourcePath = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(index_1.TnodeIoPath.upResourcePath(), sPath);
    };
    return EasyLaunch;
}());
exports.EasyLaunch = EasyLaunch;
