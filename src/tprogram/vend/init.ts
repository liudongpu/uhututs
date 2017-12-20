import {IArgsStart} from "../../air/interfaces/args";
import {TnodeIoFile} from "../../tnode/index";
import {EasyLaunch} from "../easy/launch";
import {TBase} from "../../tcore/index";
import {EasyFile} from "../easy/file";

export class VendInit {

    static initProgram(arg : IArgsStart) : boolean {

        let sDir = EasyLaunch.upSubPath('');

        TBase.logDebug(3411002, [sDir]);

        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        } 

        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), EasyLaunch.upSubPath('.gitignore') );



        if(arg.init===TBase.defineBase().projectGo){
            VendInit.initGo(arg);
        }


        return true;

    
    
    }


    



    static initGo(arg:IArgsStart):boolean{

        

        let sDir = EasyLaunch.upDevPath('');

        TBase.logDebug(3411004, [sDir]);
        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        }



        let sConfigFile = EasyLaunch.upDevPath('');



        return true;
    }

}
