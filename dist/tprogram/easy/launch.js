import { TNodeIoFile, TNodeIoPath } from "../../tnode/index";
import { TBase } from "../../tcore/index";
import { BootProgram } from "../boot/program";
export class EasyLaunch {
    static upSubPath(sPath) {
        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), TBase.defineBase().pathRoot, sPath);
    }
    static upSubPathForTemp(sPath) {
        return TNodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootTemp), sPath);
    }
    static upSubPathForGenerate(sPath) {
        return TNodeIoFile.pathJoin(this.upSubPath(TBase.defineBase().pathRootGenerate), sPath);
    }
    static upSubPathForTempGit(sPath) {
        return TNodeIoFile.pathJoin(this.upSubPathForTemp(TBase.defineBase().pathRootTempGit), sPath);
    }
    static upResourcePath(sPath) {
        return TNodeIoFile.pathJoin(TNodeIoPath.upResourcePath(), sPath);
    }
    static upDevPath(sPath) {
        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), TBase.defineBase().pathDev, sPath);
    }
    static upDevPathForSettings(sPath) {
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevSettings), sPath);
    }
    static upDevPathForPages(sPath) {
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevPages), sPath);
    }
    static upDevPathForScripts(sPath) {
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevScripts), sPath);
    }
    static upDevPathForResources(sPath) {
        return TNodeIoFile.pathJoin(this.upDevPath(TBase.defineBase().pathDevResources), sPath);
    }
    static upGoNativePath(sPath) {
        return TNodeIoFile.pathJoin(TNodeIoPath.upCwdPath(), BootProgram.upGoWorkOfNative(), sPath);
    }
}
