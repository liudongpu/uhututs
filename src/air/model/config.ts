import { IConfigInfo } from './../interfaces/config';



let configInfo:IConfigInfo={

    projectBaseName:"",

    projectVersionName:"1.0.1",


    projectDisplayName:"示例项目",

    projectVersionCode:1,


    projectEnableNative:false,

    projectEnableVue:false,

    projectEnableWeapp:false,


    badgeFlagGenerate:false,


    plugListNative:{
        reactNavigation:{
            name:"react-navigation",
            version:"1.0.0-beta.22"
        }
    }


}



export class AModelConfig {
    
    static upConfig(){
        return configInfo;
    }


    static initConfig(source){

        configInfo=Object.assign(configInfo,source);
    }

}

