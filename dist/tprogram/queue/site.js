"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program_1 = require("./../boot/program");
var launch_1 = require("./../easy/launch");
var package_1 = require("./../process/package");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tdaemon/index");
var QueueSite = /** @class */ (function () {
    function QueueSite() {
    }
    QueueSite.run = function (oConfig) {
        index_1.TNodeProtoProcess.spawn("npm", ["start"], { cwd: program_1.BootProgram.upGoWorkOfSite() });
    };
    QueueSite.update = function (oConfig) {
        var sNativePath = launch_1.EasyLaunch.upGoSitePath("");
        if (!index_1.TNodeIoFile.flagExist(sNativePath)) {
            index_1.TNodeProtoProcess.spawnSync("npx", ["create-react-app",
                program_1.BootProgram.upGoWorkOfSite()
            ]);
        }
        else {
            package_1.ProcessPackage.checkOrUpdate(index_1.TNodeIoFile.pathJoin(program_1.BootProgram.upGoWorkOfSite(), index_2.TBase.defineProgram().fileNameOfPackage), oConfig.plugListSite);
        }
    };
    return QueueSite;
}());
exports.QueueSite = QueueSite;
