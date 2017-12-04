import {IargsStart} from './../../air/face/args';
import yargs from 'yargs';
import {TcoreHelperObject} from '../../tcore/index';




let a : IargsStart = TcoreHelperObject.parseTs<IargsStart>(yargs({}).options({
    'path': {
        alias: 'p',
        describe: 'run your program'
    }
}).help().argv);

console.log(a);
