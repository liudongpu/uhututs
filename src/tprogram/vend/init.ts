import {IArgsStart} from "../../air/interfaces/args";
import {TnodeIoFile, TnodeIoPath} from "../../tnode/index";
import {EasyLaunch} from "../easy/launch";
import {TBase, TCoreCommonFunc, TCoreHelperObject} from "../../tcore/index";
import {EasyFile} from "../easy/file";
import {IConfigInfo} from "../../air/interfaces/config";

export class VendInit {

    static initProgram(arg : IArgsStart) : boolean {

        let sDir = EasyLaunch.upSubPath('');

        TBase.logDebug(3411002, [sDir]);

        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        }

        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), EasyLaunch.upSubPath('.gitignore'));

        if (arg.init === TBase.defineBase().projectGo) {
            VendInit.initGo(arg);
        }

        return true;

    }

    static initGo(arg : IArgsStart) : boolean {

        let sDir = EasyLaunch.upDevPath('');

        TBase.logDebug(3411004, [sDir]);
        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        }

        let sConfigFile = EasyLaunch.upDevPathForSetting(TBase.defineProgram().fileNameOfConfig);



        let bFlagExistConfigFile=TnodeIoFile.flagExist(sConfigFile);

        if(!bFlagExistConfigFile||arg.force){



            let oConfigCurrent=TCoreHelperObject.parseTs<IConfigInfo>({});


            if(bFlagExistConfigFile){
                oConfigCurrent=TCoreCommonFunc.jsonParse<IConfigInfo>(TnodeIoFile.readFile(sConfigFile));
            }
            let oConfigDefault = TCoreCommonFunc.jsonParse < IConfigInfo > (TnodeIoFile.readFile(EasyLaunch.upResourcePath("files-go/setting/config.json")));
            oConfigDefault.projectBaseName=TnodeIoFile.upBaseName(TnodeIoPath.upCwdPath(),"");
            oConfigCurrent=TCoreHelperObject.assign(oConfigDefault,oConfigCurrent);
            TnodeIoFile.writeFile(sConfigFile,TCoreCommonFunc.jsonStringify(oConfigCurrent));


            
        }




        return true;
    }

}
