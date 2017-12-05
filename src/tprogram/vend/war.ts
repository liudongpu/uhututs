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
            'path': {
                alias: 'p',
                describe: 'run your program'
            },
            'init':{
                alias: 'i',
                describe: Tbase.upLangInfo(331003)
            },
            'upgrade': {
                alias: 'u',
                describe: Tbase.upLangInfo(331002)
            },
            'updateWeb': {
                describe: Tbase.upLangInfo(331001)
            }
        }).help().argv);

        
        
        if(a.init){
            VendInit.initProgram(a);
        }
        



        if (this.checkInit()) {

            if (a.updateWeb) {
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
