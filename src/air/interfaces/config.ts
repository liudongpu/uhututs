
/**
 * 插件模型
 * 
 * @export
 * @interface IConfigPlug
 */
export interface IConfigPlugInfo{

    name:string,
    version:string
}

export interface IConfigPlugList{
    [key:string]:IConfigPlugInfo
}



export interface IConfigPackage{
    
}


/**
 * 配置信息
 * 
 * @export
 * @interface IConfigInfo
 */
export interface IConfigInfo{

    /**
     * 项目基本名称
     * 
     * @type {string}
     * @memberof IConfigInfo
     */
    projectBaseName:string

    /**
     * 项目版本名称
     * 
     * @type {string}
     * @memberof IConfigInfo
     */
    projectVersionName:string


    projectDisplayName:string


    projectVersionCode:number


    projectEnableNative:boolean

    projectEnableVue:boolean

    projectEnableWeapp:boolean



    /**
     * 标记 是否是自动生成的配置项
     * 
     * @type {boolean}
     * @memberof IConfigInfo
     */
    badgeFlagGenerate:boolean


    plugListNative:IConfigPlugList

}






/**
 * 页面的配置项目
 * 
 * @export
 * @interface IConfigPage
 */
export interface IConfigPage{

    pageTitle:string



    macroUrl:string


    headerLeft:string

    headerRight:string

    styleUrl:string

    
}
