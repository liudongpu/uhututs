import { IConfigInfo } from './../interfaces/config';



const configInfo:IConfigInfo={

    projectBaseName:"demo",

    projectVersionName:"1.0.1",


    projectDisplayName:"示例项目",

    projectVersionCode:1
}



export class AModelConfig {
    
    static upConfig(){
        return configInfo;
    }


    static initConfig(source){

        Object.assign(configInfo,source);
    }

}

