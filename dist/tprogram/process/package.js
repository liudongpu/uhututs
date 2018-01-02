import { TNodeIoFile, TNodeProtoProcess } from '../../tnode/index';
import { TCoreCommonFunc, TCoreHelperMap } from '../../tcore/index';
export class ProcessPackage {
    static checkOrUpdate(sPackageFile, oPlugList) {
        let oPackage = TCoreCommonFunc.jsonParse(TNodeIoFile.readFile(sPackageFile));
        let oMapPlug = TCoreHelperMap.parseMap(oPlugList);
        oMapPlug.forEach((v, k) => {
            oPackage.dependencies[v.name] = v.version;
        });
        TNodeIoFile.writeFile(sPackageFile, TCoreCommonFunc.jsonStringifyBeautify(oPackage));
        TNodeProtoProcess.spawnSync("yarn", ["install"], { cwd: TNodeIoFile.parentPath(sPackageFile) });
    }
}
