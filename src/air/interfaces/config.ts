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

}