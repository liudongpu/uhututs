import {EasyFile} from './../easy/file';
import {ProcessGit} from './../process/git';
import {IargsStart} from './../../air/interfaces/args';
import {TnodeProtoProcess, TnodeIoFile, TnodeIoPath} from '../../tnode/index';
import {Tbase} from '../../tcore/index';
import {EasyLaunch} from '../easy/launch';
export class UpdateWeb {

    static update(args : IargsStart) {

        Tbase.logDebug(3411003);

        if (args.force) {
            TnodeIoFile.deleteFile(EasyLaunch.upSubPathForTempGit(''));
        }

        ProcessGit.checkOrUpdate(Tbase.defineBase().projectManage, Tbase.defineProgram().gitManageUrl);

        EasyFile.copyDirAndReplace(EasyLaunch.upSubPathForTempGit(Tbase.defineBase().projectManage), TnodeIoPath.upCwdPath(), Tbase.defineProgram().fileExtReplace,Tbase.defineProgram().pathSkipDir);

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