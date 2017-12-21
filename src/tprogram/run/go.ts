import {QueueNative} from './../queue/native';
import {IArgsStart} from './../../air/interfaces/args';
import {EasyStart} from '../easy/start';
import {BootProgram} from '../boot/program';
import {TNodeIoPath, TNodeIoFile, TNodeProtoProcess} from '../../tnode/index';
export class RunGo {

    static run(arg : IArgsStart) {

        EasyStart.start();

        let oConfig = BootProgram.upGoConfig();


        let sConfigFile=TNodeIoFile.pathJoin(TNodeIoPath.upBinPath(), "dist","ulocal","gulp","go.js");
        console.log(sConfigFile)
        TNodeProtoProcess.spawnSync("./node_modules/.bin/gulp", ["--gulpfile=" +sConfigFile ], {
            cwd: TNodeIoPath.upBinPath()
        });

        if (oConfig.projectEnableNative) {

            //QueueNative.run(oConfig);

        }

    }

}
