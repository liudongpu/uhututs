import { QueueWeapp } from './../queue/weapp';
import { QueueNative } from './../queue/native';
import {ProcessPath} from './../process/path';
import {KProgramFileInfo} from './../../air/keep/program';
import {EasyFile} from './../easy/file';
import {ProcessPackage} from './../process/package';
import {AModelConfig} from './../../air/model/config';
import {IConfigInfo} from './../../air/interfaces/config';
import {EasyLaunch} from './../easy/launch';
import {IArgsStart} from './../../air/interfaces/args';
import { TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess, TNodeWayExec, TNodeIoPath} from '../../tnode/index';
import {BootProgram} from '../boot/program';
import {EasyStart} from '../easy/start';
import { TBase } from '../../tdaemon/index';

export class UpdateGo {

    static update(args : IArgsStart) {

        EasyStart.start();
        let oConfig = BootProgram.upGoConfig();


        this.copySrcTs(oConfig);

        if (oConfig.projectEnableNative) {

            QueueNative.update(oConfig);
        }


        if(oConfig.projectEnableWeapp){
            QueueWeapp.update(oConfig);
        }
    }




    private static copySrcTs(oConfig : IConfigInfo){

        TNodeIoFile.copyFile(TNodeIoPath.upBinPath()+"/src/air/interfaces/guide.ts",EasyLaunch.upDevPathForScripts("base/guide.ts"));
        TNodeIoFile.copyFile(TNodeIoPath.upBinPath()+"/src/air/interfaces/frame.ts",EasyLaunch.upDevPathForScripts("base/frame.ts"));


        var baseIndex=`
        import {IGuideBook} from "./guide";
        var guidebook:IGuideBook;
        export {guidebook};`;

       
        TNodeIoFile.writeFile(EasyLaunch.upDevPathForScripts("base/index.ts"),baseIndex);
        
        

        
        let oTsConfig=TCoreCommonFunc.jsonParse<any>( TNodeIoFile.readFile(EasyLaunch.upResourcePath("files-project/ts/tsconfig.json")));


        oTsConfig.compilerOptions.rootDir=EasyLaunch.upDevPathForScripts("");
        oTsConfig.include=[EasyLaunch.upDevPathForScripts("")+"/**/*"];
        oTsConfig.compilerOptions.outDir=EasyLaunch.upSubPathForGenerate("ts-dev-dist");

        TNodeIoFile.writeFile(EasyLaunch.upSubPathForGenerate("ts-dev/tsconfig.json"),TCoreCommonFunc.jsonStringifyBeautify(oTsConfig));



        //TNodeIoFile.copyDir(TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(),"src"),EasyLaunch.upSubPathForGenerate("ts-src"));
        
    }






    

    

}