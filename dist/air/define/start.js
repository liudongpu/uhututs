"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    /**
     * 最基本根路径
     */
    pathRoot: 'uhutu_ts_root',
    pathRootTemp: 'temp',
    pathRootTempGit: 'git',
    replaceContentBegin: 'uhutu_sign_begin_',
    replaceContentEnd: 'uhutu_sign_end_',
    tempDir: 'uhutu_ts_temp'
};
var defineProgram = {
    pathManageName: 'manage',
    /**
     * 执行替换的文件扩展名
     */
    fileExtReplace: '.ts;.html;',
    gitManageUrl: 'git@code.aliyun.com:liudongpu/zoomanage.git'
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
