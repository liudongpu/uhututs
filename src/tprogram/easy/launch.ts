import {TNodeIoFile, TNodeIoPath} from "../../tnode/index";
import { TBase } from '../../tdaemon/index';
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


    static upDevPathForSettings(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevSettings), sPath);
    }




    static upDevPathForPages(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevPages), sPath);
    }

    static upDevPathForScripts(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevScripts), sPath);
    }
    static upDevPathForResources(sPath:string){
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevResources), sPath);
    }




    static upGoNativePath(sPath:string){

        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), BootProgram.upGoWorkOfNative(), sPath);

    }


    static upGoSitePath(sPath:string){

        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), BootProgram.upGoWorkOfSite(), sPath);

    }



    static upGoWeappPath(sPath:string){

        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), BootProgram.upGoWorkOfWeapp(), sPath);

    }


}
