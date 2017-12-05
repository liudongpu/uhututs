import {IargsStart} from './../../air/interfaces/args';
import {TnodeProtoProcess, TnodeIoFile} from '../../tnode/index';
import {Tbase} from '../../tcore/index';
export class UpdateWeb {

    static update(args : IargsStart) {

        Tbase
            .defineProgram()
            .gitPagesUrl;

        TnodeIoFile.mkdir(Tbase.defineBase().tempDir);

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

    }

}