import {UpdateWeb} from './../update/web';
import {IargsStart} from './../../air/interfaces/args';
import {TcoreHelperObject, TcoreTopUtil} from "../../tcore/index";
import {EprogramYargs} from '../../air/export/program';

export class VendCmd {

    static start() {

        let a : IargsStart = TcoreHelperObject.parseTs < IargsStart > (EprogramYargs({}).options({
            'path': {
                alias: 'p',
                describe: 'run your program'
            },
            'upgrade': {
                alias: 'u',
                describe: TcoreTopUtil.upLangInfo(331002)
            },
            'updateWeb': {
                describe: TcoreTopUtil.upLangInfo(331001)
            }
        }).help().argv);

        if (this.checkInit()) {

            if (a.updateWeb) {
                UpdateWeb.update(a);
            }

        }

    }

    static checkInit() : boolean {

        TcoreTopUtil.logDebug(3411001);

       
        return true;

    }

}
