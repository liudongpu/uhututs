import {EasyFile} from './../easy/file';
import {ProcessGit} from './../process/git';
import {IArgsStart} from './../../air/interfaces/args';
import {TNodeProtoProcess, TNodeIoFile, TNodeIoPath} from '../../tnode/index';

import {EasyLaunch} from '../easy/launch';
import { TBase } from '../../tdaemon';
export class UpdateWeb {

    static update(args : IArgsStart) {

        

        TBase.logDebug(3411003);

        if (args.force) {
            TNodeIoFile.deleteFile(EasyLaunch.upSubPathForTempGit(''));
        }

        ProcessGit.checkOrUpdate(TBase.defineBase().projectManage, TBase.defineProgram().gitManageUrl);

        EasyFile.copyDirAndReplace(EasyLaunch.upSubPathForTempGit(TBase.defineBase().projectManage), TNodeIoPath.upCwdPath(), TBase.defineProgram().fileExtReplace,TBase.defineProgram().pathSkipDir);

        /*
        TnodeProtoProcess.spawnSync("git", [
            "clone",
            Tbase
                .defineProgram()
                .gitPagesUrl
        ], {
            cwd: Tbase
                .defineBase()
                .tempDir
        });
        */
    }

}