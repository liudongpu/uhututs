"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weapp_1 = require("./../queue/weapp");
var native_1 = require("./../queue/native");
var program_1 = require("../boot/program");
var start_1 = require("../easy/start");
var UpdateGo = /** @class */ (function () {
    function UpdateGo() {
    }
    UpdateGo.update = function (args) {
        start_1.EasyStart.start();
        var oConfig = program_1.BootProgram.upGoConfig();
        if (oConfig.projectEnableNative) {
            native_1.QueueNative.update(oConfig);
        }
        if (oConfig.projectEnableWeapp) {
            weapp_1.QueueWeapp.update(oConfig);
        }
    };
    UpdateGo.installWeapp = function (oConfig) {
    };
    return UpdateGo;
}());
exports.UpdateGo = UpdateGo;
