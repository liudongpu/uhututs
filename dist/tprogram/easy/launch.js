"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var EasyLaunch = /** @class */ (function () {
    function EasyLaunch() {
    }
    EasyLaunch.upSubPath = function (sPath) {
        return index_1.TnodeIoFile.pathJoin(index_2.Tbase.defineBase().pathOfBaseRoot, sPath);
    };
    return EasyLaunch;
}());
exports.EasyLaunch = EasyLaunch;
