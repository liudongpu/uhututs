"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../air/model/config");
var index_1 = require("../../tcore/index");
var BootProgram = /** @class */ (function () {
    function BootProgram() {
    }
    BootProgram.upGoConfig = function () {
        return config_1.AModelConfig.upConfig();
    };
    BootProgram.upGoWorkOfNative = function () {
        return index_1.TBase.defineBase().projectGo + index_1.TBase.defineBase().workNative + this.upGoConfig().projectBaseName;
    };
    return BootProgram;
}());
exports.BootProgram = BootProgram;
