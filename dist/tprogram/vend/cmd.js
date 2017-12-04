"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var program_1 = require("../../air/export/program");
var VendCmd = (function () {
    function VendCmd() {
    }
    VendCmd.start = function () {
        var a = index_1.TcoreHelperObject.parseTs(program_1.EprogramYargs({}).options({
            'path': {
                alias: 'p',
                describe: 'run your program'
            },
            'upgrade': {
                alias: 'u',
                describe: 'upgrade uhututs program'
            },
            'updatePages': {
                describe: 'update pages'
            }
        }).help().argv);
    };
    return VendCmd;
}());
exports.VendCmd = VendCmd;
