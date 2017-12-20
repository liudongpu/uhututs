



import {TNodeProtoProcess} from '../tnode/index';



import childProcess = require("child_process");



TNodeProtoProcess.spawnSync('tsc',[]);
TNodeProtoProcess.spawnSync('npm',["install","-g"]);
