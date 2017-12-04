import {IargsStart} from './../../air/face/args';
import {TcoreHelperObject} from "../../tcore/index";
import { AprogramYargs } from '../../air/import/program';

export class VendCmd {

   static start() {
    

        let a : IargsStart = TcoreHelperObject.parseTs < IargsStart > (AprogramYargs({}).options({
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

    }

}
