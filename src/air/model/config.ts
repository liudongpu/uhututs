import { IConfigInfo } from './../interfaces/config';



let configInfo:IConfigInfo={

    projectBaseName:"",

    projectVersionName:"1.0.1",


    projectDisplayName:"示例项目",

    projectVersionCode:1,


    projectEnableNative:false,

    projectEnableVue:false,

    projectEnableWeapp:false,


    badgeFlagGenerate:false


}



export class AModelConfig {
    
    static upConfig(){
        return configInfo;
    }


    static initConfig(source){

        configInfo=Object.assign(configInfo,source);
    }

}

