"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    /**
     * 最基本根路径
     */
    pathOfBaseRoot: 'uhutu_ts_root',
    pathOfTempDir: '',
    tempDir: 'uhutu_ts_temp'
};
var defineProgram = {
    gitPagesUrl: 'https://github.com/liudongpu/uhututs'
};
var GlobalDefine = (function () {
    function GlobalDefine() {
    }
    GlobalDefine.upBase = function () {
        return defineBase;
    };
    GlobalDefine.upProgram = function () {
        return defineProgram;
    };
    return GlobalDefine;
}());
exports.GlobalDefine = GlobalDefine;
