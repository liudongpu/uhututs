import { IConfigPlugList, IConfigPlugInfo } from './../../air/interfaces/config';
import { TNodeIoFile, TNodeProtoProcess, TNodeProtoCrypto } from '../../tnode/index';
import { TCoreCommonFunc, TCoreHelperMap } from '../../tcore/index';
import { FeatureStatus } from '../feature/status';

export class ProcessPackage {

    static checkOrUpdate(sPackageFile: string, oPlugList: IConfigPlugList) {



        let oPackage = TCoreCommonFunc.jsonParse<any>(TNodeIoFile.readFile(sPackageFile));



        let oMapPlug = TCoreHelperMap.parseMap<IConfigPlugInfo>(oPlugList);



        oMapPlug.forEach((v, k) => {
            oPackage.dependencies[v.name] = v.version;
        });

        let sJsonInfo = TCoreCommonFunc.jsonStringifyBeautify(oPackage);

        TNodeIoFile.writeFile(sPackageFile, sJsonInfo);


        let sMd5 = TNodeProtoCrypto.cryptoMd5(sJsonInfo);


        


        if (FeatureStatus.checkSignAndUpdate("ProcessPackage_checkOrUpdate_md5", sMd5)) {

            TNodeProtoProcess.spawnSync("yarn", ["install"], { cwd: TNodeIoFile.parentPath(sPackageFile) });


            TNodeProtoProcess.spawnSync("react-native", ["link"], { cwd: TNodeIoFile.parentPath(sPackageFile) });

        }



    }

}