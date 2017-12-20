"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configInfo = {
    projectBaseName: "",
    projectVersionName: "1.0.1",
    projectDisplayName: "示例项目",
    projectVersionCode: 1
};
var AModelConfig = /** @class */ (function () {
    function AModelConfig() {
    }
    AModelConfig.upConfig = function () {
        return configInfo;
    };
    AModelConfig.initConfig = function (source) {
        Object.assign(configInfo, source);
    };
    return AModelConfig;
}());
exports.AModelConfig = AModelConfig;
