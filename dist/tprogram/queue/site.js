"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program_1 = require("./../boot/program");
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tnode/index");
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
    };
    return QueueSite;
}());
exports.QueueSite = QueueSite;
