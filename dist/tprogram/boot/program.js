"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../air/model/config");
var index_1 = require("../../tdaemon/index");
var BootProgram = /** @class */ (function () {
    function BootProgram() {
    }
    BootProgram.upGoConfig = function () {
        var oConfig = config_1.AModelConfig.upConfig();
        if (!oConfig.badgeFlagGenerate) {
            index_1.TBase.logError(3911002);
        }
        return oConfig;
    };
    BootProgram.upGoWorkOfNative = function () {
        return index_1.TBase.defineBase().projectGo + index_1.TBase.defineBase().workNative + this.upGoConfig().projectBaseName;
    };
    return BootProgram;
}());
exports.BootProgram = BootProgram;
