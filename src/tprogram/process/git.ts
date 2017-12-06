import { EasyLaunch } from './../easy/launch';
import { TnodeIoFile, TnodeProtoProcess } from "../../tnode/index";




export class ProcessGit{

    static checkOrUpdate(sDirPath:string,sGitUrl:string){
        
        let sDir=EasyLaunch.upSubPathForTempGit(sDirPath);
        

        let sParentPath=TnodeIoFile.parentPath(sDir);
        if(!TnodeIoFile.flagExist(sParentPath)){
            TnodeIoFile.mkdir(sParentPath);
        }

        if(TnodeIoFile.flagExist(sDir)){
            TnodeProtoProcess.spawnSync('git',["pull"],{cwd:sDir});
        }
        else{
           
          
            TnodeProtoProcess.spawnSync("git",["clone",sGitUrl,sDirPath],{cwd:sParentPath});
        }


    }
    


}

