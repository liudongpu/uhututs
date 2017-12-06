"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./../easy/file");
var git_1 = require("./../process/git");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var launch_1 = require("../easy/launch");
var UpdateWeb = /** @class */ (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        index_2.Tbase.logDebug(3411003);
        if (args.force) {
            index_1.TnodeIoFile.deleteFile(launch_1.EasyLaunch.upSubPathForTempGit(''));
        }
        git_1.ProcessGit.checkOrUpdate(index_2.Tbase.defineProgram().pathManageName, index_2.Tbase.defineProgram().gitManageUrl);
        file_1.EasyFile.copyDirAndReplace(launch_1.EasyLaunch.upSubPathForTempGit(index_2.Tbase.defineProgram().pathManageName), index_1.TnodeIoPath.upCwdPath(), index_2.Tbase.defineProgram().fileExtReplace, index_2.Tbase.defineProgram().pathSkipDir);
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
