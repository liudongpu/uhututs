"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(process.cwd());
var yargs_1 = require("yargs");
var index_1 = require("../../tcore/index");
var a = index_1.TcoreHelperObject.parse(yargs_1.default({}).options({
    'path': {
        alias: 'p',
        describe: 'run your program'
    }
}).help().argv);
console.log(a);
