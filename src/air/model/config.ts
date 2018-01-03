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
        },
        ts:{
            name:"uhutu-ts",
            version:"git://github.com/liudongpu/uhututs.git"
        },
        icon:{
            name:"react-native-vector-icons",
            version:"4.4.3"
        },
        element:{
            name:"react-native-elements",
            version:"0.18.5"
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

