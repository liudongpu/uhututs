import {IargsStart} from "../../air/interfaces/args";
import {TnodeIoFile} from "../../tnode/index";
import {EasyLaunch} from "../easy/launch";
import {Tbase} from "../../tcore/index";
import {EasyFile} from "../easy/file";

export class VendInit {

    static initProgram(arg : IargsStart) : boolean {

        let sDir = EasyLaunch.upSubPath('');

        Tbase.logDebug(3411002, [sDir]);

        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        } 

        EasyFile.copyFileAndReplace(EasyLaunch.upResourcePath("files-root/gitconfig/.gitignore"), EasyLaunch.upSubPath('.gitignore') );



        if(arg.init===Tbase.defineBase().projectGo){
            VendInit.initGo(arg);
        }


        return true;

    
    
    }



    static initGo(arg:IargsStart):boolean{

        

        let sDir = EasyLaunch.upDevPath('');

        Tbase.logDebug(3411002, [sDir]);
        if (!TnodeIoFile.flagExist(sDir)) {
            TnodeIoFile.mkdir(sDir);
        }

        return true;
    }

}
