"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tnode/index");
var ProcessGit = /** @class */ (function () {
    function ProcessGit() {
    }
    ProcessGit.checkOrUpdate = function (sDirPath, sGitUrl) {
        var sDir = launch_1.EasyLaunch.upSubPathForTempGit(sDirPath);
        var sParentPath = index_1.TNodeIoFile.parentPath(sDir);
        if (!index_1.TNodeIoFile.flagExist(sParentPath)) {
            index_1.TNodeIoFile.mkdir(sParentPath);
        }
        if (index_1.TNodeIoFile.flagExist(sDir)) {
            index_1.TNodeProtoProcess.spawnSync('git', ["pull"], { cwd: sDir });
        }
        else {
            index_1.TNodeProtoProcess.spawnSync("git", ["clone", sGitUrl, sDirPath], { cwd: sParentPath });
        }
    };
    return ProcessGit;
}());
exports.ProcessGit = ProcessGit;
