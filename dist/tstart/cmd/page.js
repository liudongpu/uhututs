"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = require("yargs");
var index_1 = require("../../tcore/index");
var a = index_1.TcoreHelperObject.parseTs(yargs_1.default({}).options({
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
