"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = require("./../update/web");
var index_1 = require("../../tcore/index");
var program_1 = require("../../air/export/program");
var index_2 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var VendCmd = /** @class */ (function () {
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
                describe: index_1.Tbase.upLangInfo(331002)
            },
            'updateWeb': {
                describe: index_1.Tbase.upLangInfo(331001)
            }
        }).help().argv);
        if (this.checkInit()) {
            if (a.updateWeb) {
                web_1.UpdateWeb.update(a);
            }
        }
        else {
            index_1.Tbase.logError(3511001, [launch_1.EasyLaunch.upSubPath('')]);
        }
    };
    VendCmd.checkInit = function () {
        var sPathDir = launch_1.EasyLaunch.upSubPath('');
        index_1.Tbase.logDebug(3411001);
        return index_2.TnodeIoFile.flagExist(sPathDir);
    };
    return VendCmd;
}());
exports.VendCmd = VendCmd;
