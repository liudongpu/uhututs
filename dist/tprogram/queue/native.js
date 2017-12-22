"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var program_1 = require("../boot/program");
var QueueNative = /** @class */ (function () {
    function QueueNative() {
    }
    QueueNative.run = function (oConfig) {
        index_1.TNodeProtoProcess.spawn("npm", ["start"], { cwd: program_1.BootProgram.upGoWorkOfNative() });
    };
    return QueueNative;
}());
exports.QueueNative = QueueNative;
