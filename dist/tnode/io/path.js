"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("./file");
var IoPath = /** @class */ (function () {
    function IoPath() {
    }
    IoPath.upCwdPath = function () {
        return process.cwd();
    };
    IoPath.upBinPath = function () {
        return file_1.IoFile.parentTop(__dirname, 3);
    };
    IoPath.upResourcePath = function () {
        return file_1.IoFile.pathJoin(file_1.IoFile.parentTop(__dirname, 3), "resource");
    };
    IoPath.upTestPath = function () {
        return file_1.IoFile.pathJoin(file_1.IoFile.parentTop(__dirname, 3), "test");
    };
    return IoPath;
}());
exports.IoPath = IoPath;
