import { UpdatePage } from './../update/page';
import {IargsStart} from './../../air/interfaces/args';
import {TcoreHelperObject} from "../../tcore/index";
import { EprogramYargs } from '../../air/export/program';

export class VendCmd {

   static start() {
    

        let a : IargsStart = TcoreHelperObject.parseTs < IargsStart > (EprogramYargs({}).options({
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


        if(a.updatePages){
            UpdatePage.update(a);
        }



    }

}
