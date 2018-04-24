import { IConfigInfo } from './../../air/interfaces/config';
import {QueueNative} from './../queue/native';
import {IArgsStart} from './../../air/interfaces/args';
import {EasyStart} from '../easy/start';
import {BootProgram} from '../boot/program';
import {TNodeIoPath, TNodeIoFile, TNodeProtoProcess} from '../../tnode/index';
import { QueueWeapp } from '../queue/weapp';
import { QueueSite } from '../queue/site';
export class RunGo {

    static run(arg : IArgsStart) {

        EasyStart.refreshConfig();
        

        let oConfig = BootProgram.upGoConfig();
        

        this.startParse(oConfig);
        
        if (oConfig.projectEnableNative) {

            QueueNative.run(oConfig);

        }

        if(oConfig.projectEnableWeapp){

            QueueWeapp.run(oConfig);
        }


        if(oConfig.projectEnableSite){
            QueueSite.run(oConfig);
        }


    }





    /**
     * 启动转换逻辑代码
     * 
     * @private
     * @static
     * @param {IConfigInfo} oConfig 
     * @memberof RunGo
     */
    private static startParse(oConfig:IConfigInfo){
        let sConfigFile=TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(), "dist","ulocal","gulp","go.js");

        let sGulp=TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(), "node_modules",".bin","gulp");
        
        TNodeProtoProcess.spawn(sGulp, ["--gulpfile=" +sConfigFile ,"--cwd="+TNodeIoPath.upCwdPath()],{cwd:TNodeIoPath.upCwdPath()});

    }

}
