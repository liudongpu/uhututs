import { TnodeIoFile } from "../../tnode/index";
import { Tbase } from "../../tcore/index";


export class EasyLaunch{


    static upSubPath(sPath:string){
        return  TnodeIoFile.pathJoin(Tbase.defineBase().pathOfBaseRoot  , sPath);
    }

}
