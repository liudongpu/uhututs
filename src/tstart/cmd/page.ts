import {IargsStart} from './../../air/face/args';
import yargs from 'yargs';
import {TcoreHelperObject} from '../../tcore/index';




let a : IargsStart = TcoreHelperObject.parseTs<IargsStart>(yargs({}).options({
    'path': {
        alias: 'p',
        describe: 'run your program'
    },
    'upgrade':{
        alias:'u',
        describe:'upgrade uhututs program'
    },
    'updatePages':{
        describe:'update pages'
    }
}).help().argv);








