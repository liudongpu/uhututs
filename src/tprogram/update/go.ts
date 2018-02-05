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


        

        //TNodeIoFile.copyDir(TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(),"src"),EasyLaunch.upSubPathForGenerate("ts-src"));
        
    }






    

    

}