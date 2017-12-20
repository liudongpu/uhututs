"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defineBase = {
    /**
     * 最基本根路径
     */
    pathRoot: 'uhutu_ts_root',
    /**
     * 临时文件
    */
    pathRootTemp: 'temp',
    /**
     * 自动生成的文件
    */
    pathRootGenerate: 'generate',
    /**
     * Git项目文件夹
    */
    pathRootTempGit: 'git',
    /**
     * 自定义标记开始
    */
    replaceSignBegin: 'uhutu_sign_begin_',
    /**
     * 自定义标记结束
    */
    replaceSignEnd: 'uhutu_sign_end_',
    /**
     * 开发目录
     */
    pathDev: "dev",
    /**
     * 客户端类项目名称标记
     */
    projectGo: "go",
    projectManage: "manage"
};
var defineProgram = {
    /**
     * 执行替换的文件扩展名
     */
    fileExtReplace: '.ts,.html,.json',
    pathSkipDir: '/.git',
    gitManageUrl: 'git@code.aliyun.com:liudongpu/zoomanage.git'
};
var ADefineStart = /** @class */ (function () {
    function ADefineStart() {
    }
    ADefineStart.upBase = function () {
        return defineBase;
    };
    ADefineStart.upProgram = function () {
        return defineProgram;
    };
    return ADefineStart;
}());
exports.ADefineStart = ADefineStart;
