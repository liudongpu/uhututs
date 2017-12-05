"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    /**
     * 最基本根路径
     */
    pathRoot: 'uhutu_ts_root',
    pathRootTemp: 'temp',
    pathRootTempGit: 'git',
    tempDir: 'uhutu_ts_temp'
};
var defineProgram = {
    pathWeb: 'web',
    gitPagesUrl: 'https://github.com/liudongpu/uhututs'
};
var AdefineStart = /** @class */ (function () {
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
