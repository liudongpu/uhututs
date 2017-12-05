import {TnodeIoFile, TnodeIoPath} from "../../tnode/index";
import {Tbase} from "../../tcore/index";

export class EasyLaunch {

    static upSubPath(sPath : string) {
        return TnodeIoFile.pathJoin(TnodeIoPath.upCwdPath(), Tbase.defineBase().pathOfBaseRoot, sPath);
    }

    static upResourcePath(sPath : string) : string {

        return TnodeIoFile.pathJoin(TnodeIoPath.upResourcePath(), sPath);

    }

}
