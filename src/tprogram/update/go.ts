import {ProcessPath} from './../process/path';
import {KProgramFileInfo} from './../../air/keep/program';
import {EasyFile} from './../easy/file';
import {ProcessPackage} from './../process/package';
import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './../easy/launch';
import {IArgsStart} from './../../air/interfaces/args';
import {TBase, TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess, TNodeWayExec} from '../../tnode/index';
import {BootProgram} from '../boot/program';
import {EasyStart} from '../easy/start';
export class UpdateGo {

    static update(args : IArgsStart) {

        EasyStart.start();
        let oConfig = BootProgram.upGoConfig();

        if (oConfig.projectEnableNative) {

            this.installNative(oConfig);
        }

    }

    private static installNative(oConfig : IConfigInfo) {

        let sNativePath = EasyLaunch.upGoNativePath("");
        if (!TNodeIoFile.flagExist(sNativePath)) {

            TNodeProtoProcess.spawnSync("react-native", [
                "init", BootProgram.upGoWorkOfNative()
            ]);
        } else {

            ProcessPackage.checkOrUpdate(TNodeIoFile.pathJoin(BootProgram.upGoWorkOfNative(), TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);

            EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/macros/native.mustache"), EasyLaunch.upDevPathForResources("macro/native.mustache"));

            EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/indexs/App.js"), EasyLaunch.upGoNativePath("App.js"));

            this.updatePagesNavigation();
        }

    }

    private static updatePagesNavigation() {

        let aFileInfo : KProgramFileInfo[] = ProcessPath.upPagesPath();

        let aImport = [];

        let aRoute = [];
        aFileInfo.forEach(fItem => {
            aImport.push(fItem.importName);

            aRoute.push(fItem.screenName);
        })

        let sFilePath = EasyLaunch.upGoNativePath("App.js");

        TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: TBase
                .defineBase()
                .replaceAutoBegin + "import",
            textEnd: TBase
                .defineBase()
                .replaceAutoEnd + "import",
            textReplace: aImport.join('\r\n')
        });

        TNodeWayExec.execReplaceFileContentLine({
            filePath: sFilePath,
            textBegin: TBase
                .defineBase()
                .replaceAutoBegin + "route",
            textEnd: TBase
                .defineBase()
                .replaceAutoEnd + "route",
            textReplace: aRoute.join('\r\n')
        });

    }

}