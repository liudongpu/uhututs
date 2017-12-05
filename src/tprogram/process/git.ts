import { EasyLaunch } from './../easy/launch';
import { TnodeIoFile, TnodeProtoProcess } from "../../tnode/index";




export class ProcessGit{

    static checkOrUpdate(sDirPath:string,sGitUrl:string){
        
        let sDir=EasyLaunch.upSubPathForTempGit(sDirPath);

        if(TnodeIoFile.flagExist(sDir)){
            TnodeProtoProcess.spawnSync('git',["pull"],{cwd:sDir});
        }
        else{
           let sDirOfGit=EasyLaunch.upSubPathForTempGit('');
           console.log(sDirOfGit);
            TnodeProtoProcess.spawnSync("git",[" clone ",sGitUrl,sDirPath],{cwd:sDirOfGit});
        }


    }
    


}

