import { IconfigInfo } from './../interfaces/config';



const configInfo:IconfigInfo={

    projectBaseName:"demo",

    projectVersionName:"1.0.1"
}



export class AmodelConfig {
    
    static upConfig(){
        return configInfo;
    }


    static initConfig(source){

        Object.assign(configInfo,source);
    }

}

