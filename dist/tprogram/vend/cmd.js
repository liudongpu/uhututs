"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("./../update/web");
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
                describe: index_1.TcoreTopUtil.upLangInfo(331002)
            },
            'updateWeb': {
                describe: index_1.TcoreTopUtil.upLangInfo(331001)
            }
        }).help().argv);
        if (this.checkInit()) {
            if (a.updateWeb) {
                web_1.UpdateWeb.update(a);
            }
        }
    };
    VendCmd.checkInit = function () {
        index_1.TcoreTopUtil.logDebug(34101001);
        return true;
    };
    return VendCmd;
}());
exports.VendCmd = VendCmd;
