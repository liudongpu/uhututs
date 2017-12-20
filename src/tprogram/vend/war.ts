import { VendInit } from './init';
import {UpdateWeb} from './../update/web';
import {IArgsStart} from './../../air/interfaces/args';
import {TCoreHelperObject, TBase} from "../../tcore/index";
import {EProgramYargs} from '../../air/export/program';
import { TnodeIoFile } from '../../tnode/index';
import { EasyLaunch } from '../easy/launch';

export class VendWar {

    static start() {

        let a : IArgsStart = TCoreHelperObject.parseTs < IArgsStart > (EProgramYargs({}).options({
            
            'init':{
                alias: 'i',
                describe: TBase.upLangInfo(331003),
                type:"string"
            },
            'force':{
                alias: 'f',
                describe: TBase.upLangInfo(331004),
                type:"boolean",
                default:false
            },
            'upgrade': {
                alias: 'u',
                describe: TBase.upLangInfo(331002),
                type:"boolean",
                default:false
            },
            'updateManage': {
                describe: TBase.upLangInfo(331001),
                type:"boolean",
                default:false
            }
        }).help().argv);

        
        
        if(a.init){
            VendInit.initProgram(a);
        }
        



        if (this.checkInit()) {

            if (a.updateManage) {
                UpdateWeb.update(a);
            }

        }
        else{
            TBase.logError(3911001,[EasyLaunch.upSubPath('')]);
        }

    }

    static checkInit() : boolean {



        let sPathDir=EasyLaunch.upSubPath('');


        

        return TnodeIoFile.flagExist(sPathDir);
       
       

    }

}
