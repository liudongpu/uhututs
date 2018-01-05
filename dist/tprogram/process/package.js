"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var ProcessPackage = /** @class */ (function () {
    function ProcessPackage() {
    }
    ProcessPackage.checkOrUpdate = function (sPackageFile, oPlugList) {
        var oPackage = index_2.TCoreCommonFunc.jsonParse(index_1.TNodeIoFile.readFile(sPackageFile));
        var oMapPlug = index_2.TCoreHelperMap.parseMap(oPlugList);
        oMapPlug.forEach(function (v, k) {
            oPackage.dependencies[v.name] = v.version;
        });
        index_1.TNodeIoFile.writeFile(sPackageFile, index_2.TCoreCommonFunc.jsonStringifyBeautify(oPackage));
        index_1.TNodeProtoProcess.spawnSync("yarn", ["install"], { cwd: index_1.TNodeIoFile.parentPath(sPackageFile) });
    };
    return ProcessPackage;
}());
exports.ProcessPackage = ProcessPackage;
