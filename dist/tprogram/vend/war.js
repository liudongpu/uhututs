"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var go_1 = require("./../update/go");
var init_1 = require("./init");
var web_1 = require("./../update/web");
var index_1 = require("../../tcore/index");
var program_1 = require("../../air/export/program");
var index_2 = require("../../tnode/index");
var launch_1 = require("../easy/launch");
var go_2 = require("../run/go");
var index_3 = require("../../tdaemon/index");
var VendWar = /** @class */ (function () {
    function VendWar() {
    }
    VendWar.start = function () {
        var a = index_1.TCoreHelperObject.parseTs(program_1.EProgramYargs({}).options({
            'init': {
                alias: 'i',
                describe: index_3.TBase.upLangInfo(331003),
                type: "string"
            },
            'force': {
                alias: 'f',
                describe: index_3.TBase.upLangInfo(331004),
                type: "boolean",
                default: false
            },
            'upgrade': {
                alias: 'u',
                describe: index_3.TBase.upLangInfo(331002),
                type: "boolean",
                default: false
            },
            'updateManage': {
                describe: index_3.TBase.upLangInfo(331001),
                type: "boolean",
                default: false
            },
            'updateGo': {
                describe: index_3.TBase.upLangInfo(331005),
                type: "boolean",
                default: false
            },
            'runGo': {
                describe: index_3.TBase.upLangInfo(331006),
                type: "boolean",
                default: false
            }
        }).help().argv);
        if (a.init) {
            init_1.VendInit.initProgram(a);
        }
        else if (this.checkInit()) {
            if (a.updateManage) {
                web_1.UpdateWeb.update(a);
            }
            if (a.updateGo) {
                go_1.UpdateGo.update(a);
            }
            if (a.runGo) {
                go_2.RunGo.run(a);
            }
        }
        else {
            index_3.TBase.logError(3911001, [launch_1.EasyLaunch.upSubPath('')]);
        }
    };
    VendWar.checkInit = function () {
        var sPathDir = launch_1.EasyLaunch.upSubPath('');
        return index_2.TNodeIoFile.flagExist(sPathDir);
    };
    return VendWar;
}());
exports.VendWar = VendWar;
