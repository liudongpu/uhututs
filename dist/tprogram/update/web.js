"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../../base/index");
var index_2 = require("../../tnode/index");
var UpdateWeb = (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        index_1.BaseGlobalDefine
            .upProgram()
            .gitPagesUrl;
        index_2.TnodeIoFile.mkdir(index_1.BaseGlobalDefine.upBase().tempDir);
        index_2.TnodeProtoProcess.spawnSync("git", [
            "clone",
            index_1.BaseGlobalDefine
                .upProgram()
                .gitPagesUrl
        ], {
            cwd: index_1.BaseGlobalDefine
                .upBase()
                .tempDir
        });
    };
    return UpdateWeb;
}());
exports.UpdateWeb = UpdateWeb;
