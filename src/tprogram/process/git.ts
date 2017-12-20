import { EasyLaunch } from './../easy/launch';
import { TNodeIoFile, TNodeProtoProcess } from "../../tnode/index";




export class ProcessGit{

    static checkOrUpdate(sDirPath:string,sGitUrl:string){
        
        let sDir=EasyLaunch.upSubPathForTempGit(sDirPath);
        

        let sParentPath=TNodeIoFile.parentPath(sDir);
        if(!TNodeIoFile.flagExist(sParentPath)){
            TNodeIoFile.mkdir(sParentPath);
        }

        if(TNodeIoFile.flagExist(sDir)){
            TNodeProtoProcess.spawnSync('git',["pull"],{cwd:sDir});
        }
        else{
           
          
            TNodeProtoProcess.spawnSync("git",["clone",sGitUrl,sDirPath],{cwd:sParentPath});
        }


    }
    


}

