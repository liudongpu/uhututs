"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var UpdateWeb = (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        index_2.Tbase
            .defineProgram()
            .gitPagesUrl;
        index_1.TnodeIoFile.mkdir(index_2.Tbase.defineBase().tempDir);
        /*
        TnodeProtoProcess.spawnSync("git", [
            "clone",
            Tbase
                .defineProgram()
                .gitPagesUrl
        ], {
            cwd: Tbase
                .defineBase()
                .tempDir
        });
        */
    };
    return UpdateWeb;
}());
exports.UpdateWeb = UpdateWeb;
