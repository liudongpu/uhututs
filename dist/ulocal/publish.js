import { TNodeProtoProcess } from '../tnode/index';
var childProcess = require("child_process");
TNodeProtoProcess.spawnSync('tsc', []);
TNodeProtoProcess.spawnSync('npm', ["install", "-g"]);
