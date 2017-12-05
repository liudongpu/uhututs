import { IargsStart } from "../../air/interfaces/args";
import { TnodeIoFile } from "../../tnode/index";
import { EasyLaunch } from "../easy/launch";




export class VendInit{


    static initProgram(arg:IargsStart):boolean{


        return TnodeIoFile.mkdir(EasyLaunch.upSubPath(''));

    }

}
