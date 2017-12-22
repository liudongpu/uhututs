import {QueueNative} from './../queue/native';
import {IArgsStart} from './../../air/interfaces/args';
import {EasyStart} from '../easy/start';
import {BootProgram} from '../boot/program';
import {TNodeIoPath, TNodeIoFile, TNodeProtoProcess} from '../../tnode/index';
export class RunGo {

    static run(arg : IArgsStart) {

        EasyStart.refreshConfig();
        

        let oConfig = BootProgram.upGoConfig();
        

        let sConfigFile=TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(), "dist","ulocal","gulp","go.js");

        let sGulp=TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(), "node_modules",".bin","gulp");
        
        TNodeProtoProcess.spawn(sGulp, ["--gulpfile=" +sConfigFile ,"--cwd="+TNodeIoPath.upCwdPath()],{cwd:TNodeIoPath.upCwdPath()});

        if (oConfig.projectEnableNative) {

            QueueNative.run(oConfig);

        }

    }

}
