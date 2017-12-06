"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var git_1 = require("./../process/git");
var index_1 = require("../../tcore/index");
var UpdateWeb = /** @class */ (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        index_1.Tbase.logDebug(3411003);
        git_1.ProcessGit.checkOrUpdate(index_1.Tbase.defineProgram().pathWeb, index_1.Tbase.defineProgram().gitPagesUrl);
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
