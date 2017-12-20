import {TNodeIoFile, TNodeIoPath} from "../../tnode/index";
import {TBase} from "../../tcore/index";

export class EasyLaunch {

    static upSubPath(sPath : string):string {
        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), TBase.defineBase().pathRoot, sPath);
    }



    static upSubPathForTemp(sPath:string){
        return TNodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootTemp),sPath);
    }


    static upSubPathForGenerate(sPath:string){
        return TNodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootGenerate),sPath);
    }

    static upSubPathForTempGit(sPath:string){
        return TNodeIoFile.pathJoin(this.upSubPathForTemp(TBase.defineBase().pathRootTempGit),sPath);
    }


    static upResourcePath(sPath : string) : string {

        return TNodeIoFile.pathJoin(TNodeIoPath.upResourcePath(), sPath);

    }





    static upDevPath(sPath:string){
        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), TBase.defineBase().pathDev, sPath);
    }


    static upDevPathForSetting(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevSetting), sPath);
    }



}
