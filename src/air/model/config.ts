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
            version:"1.5.11"
        },

        

        vectorIcons:{
            name:"react-native-vector-icons",
            version:"4.6.0"
        },



        antdMobile:{

            name:"antd-mobile",
            version:"2.1.8"
        },

        babelImport:{
            name:"babel-plugin-import",
            version:"1.7.0"
        },
        babelResolver:{
            name:"babel-plugin-module-resolver",
            version:'3.1.1'
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

