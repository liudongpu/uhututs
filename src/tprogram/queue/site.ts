import {BootProgram} from './../boot/program';
import {EasyLaunch} from './../easy/launch';
import {IConfigInfo} from './../../air/interfaces/config';

import {ProcessPath} from './../process/path';
import {KProgramFileInfo} from './../../air/keep/program';
import {EasyFile} from './../easy/file';
import {ProcessPackage} from './../process/package';
import {AModelConfig} from './../../air/model/config';

import {IArgsStart} from './../../air/interfaces/args';
import {TCoreCommonFunc, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile, TNodeProtoProcess, TNodeWayExec, TNodeIoPath} from '../../tnode/index';
import {EasyStart} from '../easy/start';
import {TBase} from '../../tdaemon/index';

export class QueueSite {

    static run(oConfig : IConfigInfo) {}

    static update(oConfig : IConfigInfo) {


        let sNativePath = EasyLaunch.upGoSitePath("");
        if (!TNodeIoFile.flagExist(sNativePath)) {
            

            TNodeProtoProcess.spawnSync("npx", ["create-react-app",
                BootProgram.upGoWorkOfSite()
            ]);
        }

    }

}
