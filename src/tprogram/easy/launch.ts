import {TnodeIoFile, TnodeIoPath} from "../../tnode/index";
import {TBase} from "../../tcore/index";

export class EasyLaunch {

    static upSubPath(sPath : string):string {
        return TnodeIoFile.pathJoin(TnodeIoPath.upCwdPath(), TBase.defineBase().pathRoot, sPath);
    }



    static upSubPathForTemp(sPath:string){
        return TnodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootTemp),sPath);
    }


    static upSubPathForGenerate(sPath:string){
        return TnodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootGenerate),sPath);
    }

    static upSubPathForTempGit(sPath:string){
        return TnodeIoFile.pathJoin(this.upSubPathForTemp(TBase.defineBase().pathRootTempGit),sPath);
    }


    static upResourcePath(sPath : string) : string {

        return TnodeIoFile.pathJoin(TnodeIoPath.upResourcePath(), sPath);

    }





    static upDevPath(sPath:string){
        return TnodeIoFile.pathJoin(TnodeIoPath.upCwdPath(), TBase.defineBase().pathDev, sPath);
    }


    static upDevPathForSetting(sPath:string){
        return TnodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevSetting), sPath);
    }



}
