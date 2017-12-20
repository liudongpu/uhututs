import {TnodeIoFile, TnodeIoPath} from "../../tnode/index";
import {Tbase} from "../../tcore/index";

export class EasyLaunch {

    static upSubPath(sPath : string):string {
        return TnodeIoFile.pathJoin(TnodeIoPath.upCwdPath(), Tbase.defineBase().pathRoot, sPath);
    }



    static upSubPathForTemp(sPath:string){
        return TnodeIoFile.pathJoin(this.upSubPath(Tbase.defineBase().pathRootTemp),sPath);
    }

    static upSubPathForTempGit(sPath:string){
        return TnodeIoFile.pathJoin(this.upSubPathForTemp(Tbase.defineBase().pathRootTempGit),sPath);
    }


    static upResourcePath(sPath : string) : string {

        return TnodeIoFile.pathJoin(TnodeIoPath.upResourcePath(), sPath);

    }





    static upDevPath(sPath:string){
        return TnodeIoFile.pathJoin(TnodeIoPath.upCwdPath(), Tbase.defineBase().pathDev, sPath);
    }



}
