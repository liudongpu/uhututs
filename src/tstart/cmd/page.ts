import {IargsStart} from './../../air/face/args';

console.log(process.cwd());

import yargs from 'yargs';
import {TcoreHelperObject} from '../../tcore/index';

let a : IargsStart = TcoreHelperObject.parse<IargsStart>(yargs({}).options({
    'path': {
        alias: 'p',
        describe: 'run your program'
    }
}).help().argv);

console.log(a);
