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
     * 自动生成开始
     */
    replaceAutoBegin: 'uhutu_auto_begin_',
    /**
     * 自动生成结束
     */
    replaceAutoEnd: 'uhutu_auto_end_',
    /**
     * 开发目录
     */
    pathDev: "dev",
    pathDevPages: "pages",
    pathDevResources: "resources",
    pathDevScripts: "scripts",
    pathDevSettings: "settings",
    regexOutBegin: "[#",
    regexOutEnd: "]",
    regexBaseString: "(.*?):(.*?)",
    /**
     * 客户端类项目名称标记
     */
    projectGo: "go",
    projectManage: "manage",
    workNative: "native",
    workVue: "vue",
    workWeapp: "weapp"
};
var defineProgram = {
    /**
     * 执行替换的文件扩展名
     */
    fileExtReplace: '.ts,.html,.json',
    pathSkipDir: '/.git',
    gitManageUrl: 'git@code.aliyun.com:liudongpu/zoomanage.git',
    fileNameOfConfig: "config-go.json",
    fileNameOfPackage: "package.json"
};
var defineData = {
    startTemplate: 'data-template-',
    startSource: 'data-source-',
    startProp: 'data-prop-',
    startStyle: 'data-style-',
    startIcon: 'data-icon-',
    startNumber: 'data-number-',
    startForm: 'data-form-',
    nameRecord: 'record',
    nameCall: 'call',
    nameRender: 'render',
    nameState: 'state',
    nameLabel: 'label',
    nameArrow: 'arrow',
    nameOption: 'option'
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
    ADefineStart.upData = function () {
        return defineData;
    };
    return ADefineStart;
}());
exports.ADefineStart = ADefineStart;
