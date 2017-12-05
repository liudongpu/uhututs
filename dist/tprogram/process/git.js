"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tnode/index");
var ProcessGit = /** @class */ (function () {
    function ProcessGit() {
    }
    ProcessGit.checkOrUpdate = function (sDirPath, sGitUrl) {
        var sDir = launch_1.EasyLaunch.upSubPathForTempGit(sDirPath);
        if (index_1.TnodeIoFile.flagExist(sDir)) {
            index_1.TnodeProtoProcess.spawnSync('git', ["pull"], { cwd: sDir });
        }
        else {
            var sDirOfGit = launch_1.EasyLaunch.upSubPathForTempGit('');
            console.log(sDirOfGit);
            index_1.TnodeProtoProcess.spawnSync("git", [" clone ", sGitUrl, sDirPath], { cwd: sDirOfGit });
        }
    };
    return ProcessGit;
}());
exports.ProcessGit = ProcessGit;
