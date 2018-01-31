
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

    /**
     * 项目显示名称
     * 
     * @type {string}
     * @memberof IConfigInfo
     */
    projectDisplayName:string

    /**
     * 项目版本编号
     * 
     * @type {number}
     * @memberof IConfigInfo
     */
    projectVersionCode:number


    projectEnableNative:boolean

    projectEnableVue:boolean

    projectEnableWeapp:boolean


    /**
     * 微信小程序编号
     * 
     * @type {string}
     * @memberof IConfigInfo
     */
    envWeappId?:string


    /**
     * 标记 是否是自动生成的配置项 该参数用于代码的逻辑判断  勿定义
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
