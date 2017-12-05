import {UpdatePage} from './../update/page';
import {IargsStart} from './../../air/interfaces/args';
import {TcoreHelperObject} from "../../tcore/index";
import {EprogramYargs} from '../../air/export/program';
import {EutilLog} from '../../air/export/util';

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
            'updateWeb': {
                describe: 'update pages'
            }
        }).help().argv);

        if (this.checkInit()) {

            if (a.updatePages) {
                UpdatePage.update(a);
            }

        }

    }

    static checkInit() : boolean {

        //EutilLog.debug('abcd');
        EutilLog.info("aaaaa");

        return true;

    }

}
