"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("./../update/page");
var index_1 = require("../../tcore/index");
var program_1 = require("../../air/export/program");
var util_1 = require("../../air/export/util");
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
            'updateWeb': {
                describe: 'update pages'
            }
        }).help().argv);
        if (this.checkInit()) {
            if (a.updatePages) {
                page_1.UpdatePage.update(a);
            }
        }
    };
    VendCmd.checkInit = function () {
        //EutilLog.debug('abcd');
        util_1.EutilLog.info("aaaaa");
        return true;
    };
    return VendCmd;
}());
exports.VendCmd = VendCmd;
