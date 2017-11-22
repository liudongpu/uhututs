



import {TnodeProtoProcess} from '../tnode/index';



import childProcess = require("child_process");



TnodeProtoProcess.spawnSync('tsc',[]);
TnodeProtoProcess.spawnSync('npm',["install","-g"]);
