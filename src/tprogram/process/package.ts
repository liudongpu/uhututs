import {IConfigPlugList, IConfigPlugInfo} from './../../air/interfaces/config';
import {TNodeIoFile, TNodeProtoProcess, TNodeProtoCrypto} from '../../tnode/index';
import {TCoreCommonFunc, TCoreHelperMap} from '../../tcore/index';
import {FeatureStatus} from '../feature/status';

export class ProcessPackage {

    static checkOrUpdateNative(sPackageFile : string, oPlugList : IConfigPlugList) {
        if (this.checkFlagChange(sPackageFile, oPlugList)) {

            TNodeProtoProcess.spawnSync("yarn", ["install"], {
                cwd: TNodeIoFile.parentPath(sPackageFile)
            });

            TNodeProtoProcess.spawnSync("react-native", ["link"], {
                cwd: TNodeIoFile.parentPath(sPackageFile)
            });

        }

    }

    private static checkFlagChange(sPackageFile : string, oPlugList : IConfigPlugList) {

        let oPackage = TCoreCommonFunc.jsonParse < any > (TNodeIoFile.readFile(sPackageFile));

        let oMapPlug = TCoreHelperMap.parseMap < IConfigPlugInfo > (oPlugList);

        oMapPlug.forEach((v, k) => {
            oPackage.dependencies[v.name] = v.version;
        });

        let sJsonInfo = TCoreCommonFunc.jsonStringifyBeautify(oPackage);

        TNodeIoFile.writeFile(sPackageFile, sJsonInfo);

        let sFileKey = TNodeProtoCrypto.cryptoMd5(sPackageFile);

        let sMd5 = TNodeProtoCrypto.cryptoMd5(sJsonInfo);

        return FeatureStatus.checkSignAndUpdate("ProcessPackage_checkOrUpdate_md5_" + sFileKey, sMd5);

    }

    static checkOrUpdate(sPackageFile : string, oPlugList : IConfigPlugList) {

        if (this.checkFlagChange(sPackageFile, oPlugList)) {

            TNodeProtoProcess.spawnSync("yarn", ["install"], {
                cwd: TNodeIoFile.parentPath(sPackageFile)
            });


        }

    }

}