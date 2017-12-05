import { ProcessGit } from './../process/git';
import {IargsStart} from './../../air/interfaces/args';
import {TnodeProtoProcess, TnodeIoFile} from '../../tnode/index';
import {Tbase} from '../../tcore/index';
export class UpdateWeb {

    static update(args : IargsStart) {





       ProcessGit.checkOrUpdate(Tbase.defineProgram().pathWeb,Tbase.defineProgram().gitPagesUrl);

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