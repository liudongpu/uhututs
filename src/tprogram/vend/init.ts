import {IargsStart} from "../../air/interfaces/args";
import {TnodeIoFile} from "../../tnode/index";
import {EasyLaunch} from "../easy/launch";
import {Tbase} from "../../tcore/index";

export class VendInit {

    static initProgram(arg : IargsStart) : boolean {

        let sDir = EasyLaunch.upSubPath('');

        Tbase.logDebug(3411002, [sDir]);

        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        }
        else{
            Tbase.logWarn(3711001, [sDir]);
        }

        return true;

    }

}
