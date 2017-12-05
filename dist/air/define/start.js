"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    /**
     * 最基本根路径
     */
    pathOfBaseRoot: 'uhutu_ts_root',
    pathOfTempDir: 'temp',
    tempDir: 'uhutu_ts_temp'
};
var defineProgram = {
    gitPagesUrl: 'https://github.com/liudongpu/uhututs'
};
var AdefineStart = (function () {
    function AdefineStart() {
    }
    AdefineStart.upBase = function () {
        return defineBase;
    };
    AdefineStart.upProgram = function () {
        return defineProgram;
    };
    return AdefineStart;
}());
exports.AdefineStart = AdefineStart;
