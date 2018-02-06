import { BootProgram } from './../boot/program';
import { EasyLaunch } from './../easy/launch';
import { IConfigInfo } from './../../air/interfaces/config';

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



export class QueueWeapp{




    static run(oConfig:IConfigInfo){

       

          
       


    }



    static update(oConfig:IConfigInfo){
        
        let sWeappPath=EasyLaunch.upGoWeappPath("");

        if(!TNodeIoFile.flagExist(sWeappPath)){

           
            TNodeIoFile.copyDir(EasyLaunch.upResourcePath("init-weapp"),sWeappPath);
        }


        let sProjectFile=  EasyLaunch.upGoWeappPath("project.config.json");

        let oJsonProject=TCoreCommonFunc.jsonParse<any>(TNodeIoFile.readFile( sProjectFile));

        oJsonProject.projectname=oConfig.projectBaseName;
        oJsonProject.appid=oConfig.envWeappId;
        TNodeIoFile.writeFile(sProjectFile,TCoreCommonFunc.jsonStringifyBeautify(oJsonProject));


        this.pageImport(oConfig);


        this.processScript(oConfig);


        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/macros/weapp.mustache"), EasyLaunch.upDevPathForResources("macro/weapp.mustache"));

        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-go/macros/weapp_js.mustache"), EasyLaunch.upDevPathForResources("macro/weapp_js.mustache"));


    }



    private static pageImport(oConfig:IConfigInfo){
        let aFileInfo : KProgramFileInfo[] = ProcessPath.upPagesPath();

        let aImport = [];

        

        aFileInfo.forEach(fItem => {

           
            aImport.push(fItem.filePath);

        });


        let sProjectFile=  EasyLaunch.upGoWeappPath("app.json");
        let oAppJson=TCoreCommonFunc.jsonParse<any>(TNodeIoFile.readFile( sProjectFile));

        oAppJson.pages=aImport;

        TNodeIoFile.writeFile(sProjectFile,TCoreCommonFunc.jsonStringifyBeautify(oAppJson));


    }




    private static processScript(oConfig:IConfigInfo){



        var baseIndex=`import {WWeappGuideBook} from '../adapter/wweapp/index';export {WWeappGuideBook as guidebook};`;


        TNodeIoFile.writeFile(EasyLaunch.upGoWeappPath("scripts/base/index.js"),baseIndex);


        let oTsConfig=TCoreCommonFunc.jsonParse<any>( TNodeIoFile.readFile(EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));


        oTsConfig.compilerOptions.rootDir=TNodeIoPath.upBinPath()+"/src/";
        oTsConfig.include=[TNodeIoPath.upBinPath()+"/src/wweapp/**/*",TNodeIoPath.upBinPath()+"/src/tcore/**/*"];
        oTsConfig.compilerOptions.outDir=EasyLaunch.upGoWeappPath("scripts/adapter");

        TNodeIoFile.writeFile(EasyLaunch.upSubPathForGenerate("ts-src-weapp/tsconfig.json"),TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));


        TNodeProtoProcess.spawnSync("tsc", [
            
        ],{cwd:EasyLaunch.upSubPathForGenerate("ts-src-weapp")});
    }




}
