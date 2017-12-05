"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var init_1 = require("./init");
var web_1 = require("./../update/web");
var index_1 = require("../../tcore/index");
var program_1 = require("../../air/export/program");
var index_2 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var VendWar = (function () {
    function VendWar() {
    }
    VendWar.start = function () {
        var a = index_1.TcoreHelperObject.parseTs(program_1.EprogramYargs({}).options({
            'path': {
                alias: 'p',
                describe: 'run your program'
            },
            'init': {
                alias: 'i',
                describe: index_1.Tbase.upLangInfo(331003)
            },
            'upgrade': {
                alias: 'u',
                describe: index_1.Tbase.upLangInfo(331002)
            },
            'updateWeb': {
                describe: index_1.Tbase.upLangInfo(331001)
            }
        }).help().argv);
        console.log('bb');
        if (a.init) {
            init_1.VendInit.initProgram(a);
        }
        if (this.checkInit()) {
            if (a.updateWeb) {
                web_1.UpdateWeb.update(a);
            }
        }
        else {
            index_1.Tbase.logError(3511001, [launch_1.EasyLaunch.upSubPath('')]);
        }
    };
    VendWar.checkInit = function () {
        var sPathDir = launch_1.EasyLaunch.upSubPath('');
        index_1.Tbase.logDebug(3411001);
        return index_2.TnodeIoFile.flagExist(sPathDir);
    };
    return VendWar;
}());
exports.VendWar = VendWar;
