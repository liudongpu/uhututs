"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configInfo = {
    projectBaseName: "",
    projectVersionName: "1.0.1",
    projectDisplayName: "示例项目",
    projectVersionCode: 1,
    projectEnableNative: false,
    projectEnableSite: false,
    projectEnableWeapp: false,
    badgeFlagGenerate: false,
    plugListSite: {
        reactNavigation: {
            name: "react-navigation",
            version: "1.5.11"
        },
        antdMobile: {
            name: "antd-mobile",
            version: "2.1.8"
        }
    },
    plugListNative: {
        reactNavigation: {
            name: "react-navigation",
            version: "1.5.11"
        },
        vectorIcons: {
            name: "react-native-vector-icons",
            version: "4.6.0"
        },
        antdMobile: {
            name: "antd-mobile",
            version: "2.1.8"
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
