"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./../easy/file");
var git_1 = require("./../process/git");
var index_1 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var tdaemon_1 = require("../../tdaemon");
var UpdateWeb = /** @class */ (function () {
    function UpdateWeb() {
    }
    UpdateWeb.update = function (args) {
        tdaemon_1.TBase.logDebug(3411003);
        if (args.force) {
            index_1.TNodeIoFile.deleteFile(launch_1.EasyLaunch.upSubPathForTempGit(''));
        }
        git_1.ProcessGit.checkOrUpdate(tdaemon_1.TBase.defineBase().projectManage, tdaemon_1.TBase.defineProgram().gitManageUrl);
        file_1.EasyFile.copyDirAndReplace(launch_1.EasyLaunch.upSubPathForTempGit(tdaemon_1.TBase.defineBase().projectManage), index_1.TNodeIoPath.upCwdPath(), tdaemon_1.TBase.defineProgram().fileExtReplace, tdaemon_1.TBase.defineProgram().pathSkipDir);
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
