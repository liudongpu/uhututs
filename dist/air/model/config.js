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
            version: "git://github.com/liudongpu/uhututs.git"
        },
        icon: {
            name: "react-native-vector-icons",
            version: "4.4.3"
        },
        qrcode: {
            name: "react-native-qrcode",
            version: "0.2.6"
        },
        element: {
            name: "react-native-elements",
            version: "0.18.5"
        },
        dropdown: {
            name: "react-native-modal-dropdown",
            version: "0.5.0"
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
