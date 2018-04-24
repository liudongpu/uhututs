import { EasyLaunch } from './../easy/launch';
import { IConfigInfo } from './../../air/interfaces/config';

import { BootProgram } from '../boot/program';
import {ProcessPath} from './../process/path';
import {KProgramFileInfo} from './../../air/keep/program';
import {EasyFile} from './../easy/file';
import {ProcessPackage} from './../process/package';
import {AModelConfig} from './../../air/model/config';

import {IArgsStart} from './../../air/interfaces/args';
import { TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess, TNodeWayExec, TNodeIoPath} from '../../tnode/index';
import {EasyStart} from '../easy/start';
import { TBase } from '../../tdaemon/index';



export class QueueNative{




    static run(oConfig:IConfigInfo){

       

            TNodeProtoProcess.spawn("npm",["start"],{cwd:BootProgram.upGoWorkOfNative()});
       


    }



    static update(oConfig:IConfigInfo){
        let sNativePath = EasyLaunch.upGoNativePath("");
        if (!TNodeIoFile.flagExist(sNativePath)) {

            TNodeProtoProcess.spawnSync("react-native", ["init",
                BootProgram.upGoWorkOfNative()
            ]);
        } else {

            ProcessPackage.checkOrUpdateNative(TNodeIoFile.pathJoin(BootProgram.upGoWorkOfNative(), TBase.defineProgram().fileNameOfPackage), oConfig.plugListNative);

           


            EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/macros/native.mustache"), EasyLaunch.upDevPathForResources("macro/native.mustache"));

            EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/indexs/App.js"), EasyLaunch.upGoNativePath("App.js"));


            

            this.updatePagesNavigation();


            this.processScript(oConfig);
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



    private static processScript(oConfig:IConfigInfo){



        
        var baseIndex=`import {WNativeGuideBook} from '../adapter/wnative/index';export {WNativeGuideBook as guidebook};`;


        TNodeIoFile.writeFile(EasyLaunch.upGoNativePath("scripts/base/index.js"),baseIndex);

        

        //let oTsConfig=TCoreCommonFunc.jsonParse<any>( TNodeIoFile.readFile(EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));
        //oTsConfig.compilerOptions.rootDir=TNodeIoPath.upBinPath()+"/src/";
        //oTsConfig.include=[TNodeIoPath.upBinPath()+"/src/wnative/**/*",TNodeIoPath.upBinPath()+"/src/tcore/**/*"];
        //oTsConfig.compilerOptions.outDir=EasyLaunch.upGoNativePath("scripts/adapter");
        //TNodeIoFile.writeFile(EasyLaunch.upSubPathForGenerate("ts-src-native/tsconfig.json"),TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));
        //TNodeProtoProcess.spawnSync("tsc", [],{cwd:EasyLaunch.upSubPathForGenerate("ts-src-native"),"stdio":""});




        TBase.logDebug(3411005);
        TNodeIoFile.copyDir(TNodeIoPath.upBinPath()+"/lib/wnative",EasyLaunch.upGoNativePath("scripts/adapter/wnative"));
        TNodeIoFile.copyDir(TNodeIoPath.upBinPath()+"/lib/tcore",EasyLaunch.upGoNativePath("scripts/adapter/tcore"));
    }


}
