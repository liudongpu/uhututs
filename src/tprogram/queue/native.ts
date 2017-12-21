import { EasyLaunch } from './../easy/launch';
import { IConfigInfo } from './../../air/interfaces/config';
import { TNodeProtoProcess } from '../../tnode/index';
import { BootProgram } from '../boot/program';




export class QueueNative{




    static run(oConfig:IConfigInfo){

       

            TNodeProtoProcess.spawnSync("npm",["start"],{cwd:BootProgram.upGoWorkOfNative()});
       


    }

}
