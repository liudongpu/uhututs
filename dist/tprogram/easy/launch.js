"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var EasyLaunch = /** @class */ (function () {
    function EasyLaunch() {
    }
    EasyLaunch.upSubPath = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(index_1.TnodeIoPath.upCwdPath(), index_2.Tbase.defineBase().pathRoot, sPath);
    };
    EasyLaunch.upSubPathForTemp = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(this.upSubPath(index_2.Tbase.defineBase().pathRootTemp), sPath);
    };
    EasyLaunch.upSubPathForTempGit = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(this.upSubPathForTemp(index_2.Tbase.defineBase().pathRootTempGit), sPath);
    };
    EasyLaunch.upResourcePath = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(index_1.TnodeIoPath.upResourcePath(), sPath);
    };
    return EasyLaunch;
}());
exports.EasyLaunch = EasyLaunch;
