import {UpdateGo} from './../update/go';
import {VendInit} from './init';
import {UpdateWeb} from './../update/web';
import {IArgsStart} from './../../air/interfaces/args';
import {TCoreHelperObject} from "../../tcore/index";
import {EProgramYargs} from '../../air/export/program';
import {TNodeIoFile} from '../../tnode/index';
import {EasyLaunch} from '../easy/launch';
import {RunGo} from '../run/go';
import { TBase } from '../../tdaemon/index';

export class VendWar {

    static start() {

        let a : IArgsStart = TCoreHelperObject.parseTs < IArgsStart > (EProgramYargs({}).options({

            'init': {
                alias: 'i',
                describe: TBase.upLangInfo(331003),
                type: "string"
            },
            'force': {
                alias: 'f',
                describe: TBase.upLangInfo(331004),
                type: "boolean",
                default: false
            },
            'upgrade': {
                alias: 'u',
                describe: TBase.upLangInfo(331002),
                type: "boolean",
                default: false
            },
            'updateManage': {
                describe: TBase.upLangInfo(331001),
                type: "boolean",
                default: false
            },
            'updateGo': {
                describe: TBase.upLangInfo(331005),
                type: "boolean",
                default: false
            },
            'runGo': {
                describe: TBase.upLangInfo(331006),
                type: "boolean",
                default: false
            }
        }).help().argv);

        if (a.init) {
            VendInit.initProgram(a);
        }

        else if (this.checkInit()) {

            if (a.updateManage) {
                UpdateWeb.update(a);
            }

            if (a.updateGo) {
                UpdateGo.update(a);
            }

            if (a.runGo) {
                RunGo.run(a);
            }

        } else {
            TBase.logError(3911001, [EasyLaunch.upSubPath('')]);
        }

    }

    static checkInit() : boolean {

        let sPathDir = EasyLaunch.upSubPath('');

        return TNodeIoFile.flagExist(sPathDir);

    }

}
