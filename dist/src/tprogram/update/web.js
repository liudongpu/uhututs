"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var UpdateWeb = /** @class */ (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        index_2.Tbase
            .defineProgram()
            .gitPagesUrl;
        index_1.TnodeIoFile.mkdir(index_2.Tbase.defineBase().tempDir);
        index_1.TnodeProtoProcess.spawnSync("git", [
            "clone",
            index_2.Tbase
                .defineProgram()
                .gitPagesUrl
        ], {
            cwd: index_2.Tbase
                .defineBase()
                .tempDir
        });
    };
    return UpdateWeb;
}());
exports.UpdateWeb = UpdateWeb;
