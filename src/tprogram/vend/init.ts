import {IArgsStart} from "../../air/interfaces/args";
import {TNodeIoFile, TNodeIoPath} from "../../tnode/index";
import {EasyLaunch} from "../easy/launch";
import {TBase, TCoreCommonFunc, TCoreHelperObject} from "../../tcore/index";
import {EasyFile} from "../easy/file";
import {IConfigInfo} from "../../air/interfaces/config";

export class VendInit {

    static initProgram(arg : IArgsStart) : boolean {

        let sDir = EasyLaunch.upSubPath('');

        TBase.logDebug(3411002, [sDir]);

        if (!TNodeIoFile.flagExist(sDir)) {
            TNodeIoFile.mkdir(sDir);
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
        if (!TNodeIoFile.flagExist(sDir)) {
            TNodeIoFile.mkdir(sDir);
        }

        let sConfigFile = EasyLaunch.upDevPathForSettings(TBase.defineProgram().fileNameOfConfig);

        let bFlagExistConfigFile = TNodeIoFile.flagExist(sConfigFile);

        if (!bFlagExistConfigFile || arg.force) {

            let oConfigCurrent = TCoreHelperObject.parseTs < IConfigInfo > ({});

            if (bFlagExistConfigFile) {
                oConfigCurrent = TCoreCommonFunc.jsonParse < IConfigInfo > (TNodeIoFile.readFile(sConfigFile));
            }
            let oConfigDefault = TCoreCommonFunc.jsonParse < IConfigInfo > (TNodeIoFile.readFile(EasyLaunch.upResourcePath("files-go/setting/config.json")));
            oConfigDefault.projectBaseName = TNodeIoFile.upBaseName(TNodeIoPath.upCwdPath(), "");
            oConfigCurrent = TCoreHelperObject.assign(oConfigDefault, oConfigCurrent);
            TNodeIoFile.writeFile(sConfigFile, TCoreCommonFunc.jsonStringifyBeautify(oConfigCurrent));

            TBase.logInfo(3611001);
        }

        TNodeIoFile.mkdir(EasyLaunch.upDevPathForPages(""));
        TNodeIoFile.mkdir(EasyLaunch.upDevPathForScripts(""));
        TNodeIoFile.mkdir(EasyLaunch.upDevPathForResources(""));
       

        return true;
    }

}
