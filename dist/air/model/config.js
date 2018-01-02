"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configInfo = {
    projectBaseName: "",
    projectVersionName: "1.0.1",
    projectDisplayName: "示例项目",
    projectVersionCode: 1,
    projectEnableNative: false,
    projectEnableVue: false,
    projectEnableWeapp: false,
    badgeFlagGenerate: false,
    plugListNative: {
        reactNavigation: {
            name: "react-navigation",
            version: "1.0.0-beta.22"
        },
        ts: {
            name: "uhutu-ts",
            version: "file:../../../git/uhututs/"
        }
    }
};
var AModelConfig = /** @class */ (function () {
    function AModelConfig() {
    }
    AModelConfig.upConfig = function () {
        return configInfo;
    };
    AModelConfig.initConfig = function (source) {
        configInfo = Object.assign(configInfo, source);
    };
    return AModelConfig;
}());
exports.AModelConfig = AModelConfig;
