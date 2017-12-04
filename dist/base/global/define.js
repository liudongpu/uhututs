"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    tempDir: 'uhutu_ts_temp'
};
var defineProgram = {
    gitPagesUrl: 'https://github.com/liudongpu/uhututs'
};
var BaseGlobalDefine = (function () {
    function BaseGlobalDefine() {
    }
    BaseGlobalDefine.upBase = function () {
        return defineBase;
    };
    BaseGlobalDefine.upProgram = function () {
        return defineProgram;
    };
    return BaseGlobalDefine;
}());
exports.BaseGlobalDefine = BaseGlobalDefine;
