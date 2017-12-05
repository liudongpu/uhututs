"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../tnode/index");
index_1.TnodeProtoProcess.spawnSync('tsc', []);
index_1.TnodeProtoProcess.spawnSync('npm', ["install", "-g"]);
