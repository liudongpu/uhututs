"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configInfo = {
    projectBaseName: "demo",
    projectVersionName: "1.0.1"
};
var AmodelConfig = /** @class */ (function () {
    function AmodelConfig() {
    }
    AmodelConfig.upConfig = function () {
        return configInfo;
    };
    AmodelConfig.initConfig = function (source) {
        Object.assign(configInfo, source);
    };
    return AmodelConfig;
}());
exports.AmodelConfig = AmodelConfig;
