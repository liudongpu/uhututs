"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var VendInit = (function () {
    function VendInit() {
    }
    VendInit.initProgram = function (arg) {
        return index_1.TnodeIoFile.mkdir(launch_1.EasyLaunch.upSubPath(''));
    };
    return VendInit;
}());
exports.VendInit = VendInit;
