import { BootProgram } from './../boot/program';
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
import {TNodeIoFile, TNodeProtoProcess, TNodeWayExec} from '../../tnode/index';
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

    }



}
