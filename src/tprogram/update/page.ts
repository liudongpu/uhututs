import {BaseGlobalDefine} from './../../base/global/define';
import {IargsStart} from './../../air/interfaces/args';
import {TnodeProtoProcess, TnodeIoFile} from '../../tnode/index';
export class UpdatePage {

    static update(args : IargsStart) {

        BaseGlobalDefine
            .upProgram()
            .gitPagesUrl;

        TnodeIoFile.mkdir(BaseGlobalDefine.upBase().tempDir);

        TnodeProtoProcess.spawnSync("git", [
            "clone",
            BaseGlobalDefine
                .upProgram()
                .gitPagesUrl
        ], {
            cwd: BaseGlobalDefine
                .upBase()
                .tempDir
        });

    }

}