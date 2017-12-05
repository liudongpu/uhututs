"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./file");
var IoPath = (function () {
    function IoPath() {
    }
    IoPath.upCwdPath = function () {
        return process.cwd();
    };
    IoPath.upResourcePath = function () {
        return file_1.IoFile.pathJoin(file_1.IoFile.parentTop(__dirname, 3), "resource");
    };
    return IoPath;
}());
exports.IoPath = IoPath;
