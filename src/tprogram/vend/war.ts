import { VendInit } from './init';
import {UpdateWeb} from './../update/web';
import {IargsStart} from './../../air/interfaces/args';
import {TcoreHelperObject, Tbase} from "../../tcore/index";
import {EprogramYargs} from '../../air/export/program';
import { TnodeIoFile } from '../../tnode/index';
import { EasyLaunch } from '../easy/launch';

export class VendWar {

    static start() {

        let a : IargsStart = TcoreHelperObject.parseTs < IargsStart > (EprogramYargs({}).options({
            
            'init':{
                alias: 'i',
                describe: Tbase.upLangInfo(331003),
                type:"boolean",
                default:false
            },
            'force':{
                alias: 'f',
                describe: Tbase.upLangInfo(331004),
                type:"boolean",
                default:false
            },
            'upgrade': {
                alias: 'u',
                describe: Tbase.upLangInfo(331002),
                type:"boolean",
                default:false
            },
            'updateManage': {
                describe: Tbase.upLangInfo(331001),
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
            Tbase.logError(3911001,[EasyLaunch.upSubPath('')]);
        }

    }

    static checkInit() : boolean {



        let sPathDir=EasyLaunch.upSubPath('');


        

        return TnodeIoFile.flagExist(sPathDir);
       
       

    }

}
