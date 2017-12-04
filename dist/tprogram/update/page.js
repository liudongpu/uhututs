"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var define_1 = require("./../../base/global/define");
var index_1 = require("../../tnode/index");
var UpdatePage = (function () {
    function UpdatePage() {
    }
    UpdatePage.update = function (args) {
        define_1.BaseGlobalDefine.upProgram().gitPagesUrl;
        index_1.TnodeIoFile.mkdir(define_1.BaseGlobalDefine.upBase().tempDir);
    };
    return UpdatePage;
}());
exports.UpdatePage = UpdatePage;
