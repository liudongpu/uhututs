import { IConfigInfo } from './../interfaces/config';



let configInfo:IConfigInfo={

    projectBaseName:"",

    projectVersionName:"1.0.1",


    projectDisplayName:"示例项目",

    projectVersionCode:1,


    

    projectEnableNative:false,

    projectEnableSite:false,

    projectEnableWeapp:false,


    badgeFlagGenerate:false,

    plugListSite:{
        reactNavigation:{
            name:"react-navigation",
            version:"1.5.11"
        },
        antdMobile:{
            name:"antd-mobile",
            version:"2.1.8"
        }
    },


    plugListNative:{
        reactNavigation:{
            name:"react-navigation",
            version:"1.5.11"
        },
        vectorIcons:{
            name:"react-native-vector-icons",
            version:"4.6.0"
        },
        antdMobile:{
            name:"antd-mobile",
            version:"2.1.8"
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

