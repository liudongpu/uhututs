import {TNodeIoFile, TNodeIoPath} from "../../tnode/index";
import {TBase} from "../../tcore/index";
import { BootProgram } from "../boot/program";

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




    static upDevPathForPages(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevPages), sPath);
    }

    static upDevPathForScripts(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevScripts), sPath);
    }





    static upGoNativePath(sPath:string){

        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), BootProgram.upGoWorkOfNative(), sPath);

    }


}
