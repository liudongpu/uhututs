"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var status_1 = require("../feature/status");
var ProcessPackage = /** @class */ (function () {
    function ProcessPackage() {
    }
    ProcessPackage.checkOrUpdate = function (sPackageFile, oPlugList) {
        var oPackage = index_2.TCoreCommonFunc.jsonParse(index_1.TNodeIoFile.readFile(sPackageFile));
        var oMapPlug = index_2.TCoreHelperMap.parseMap(oPlugList);
        oMapPlug.forEach(function (v, k) {
            oPackage.dependencies[v.name] = v.version;
        });
        var sJsonInfo = index_2.TCoreCommonFunc.jsonStringifyBeautify(oPackage);
        index_1.TNodeIoFile.writeFile(sPackageFile, sJsonInfo);
        var sMd5 = index_1.TNodeProtoCrypto.cryptoMd5(sJsonInfo);
        if (status_1.FeatureStatus.checkSignAndUpdate("ProcessPackage_checkOrUpdate_md5", sMd5)) {
            index_1.TNodeProtoProcess.spawnSync("yarn", ["install"], { cwd: index_1.TNodeIoFile.parentPath(sPackageFile) });
            index_1.TNodeProtoProcess.spawnSync("react-native", ["link"], { cwd: index_1.TNodeIoFile.parentPath(sPackageFile) });
        }
    };
    return ProcessPackage;
}());
exports.ProcessPackage = ProcessPackage;
