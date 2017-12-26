export interface IArgsStart{


    path:string,



    init:string,

    /**
     * 强制操作
     * 
     * @type {boolean}
     * @memberof IargsStart
     */
    force:boolean,

    /**
     * 更新页面程序
     * 
     * @type {boolean}
     * @memberof IargsStart
     */
    updateManage:boolean


    updateGo:boolean


    runGo:boolean

}






export interface IArgsExec{
    /**
     * 
     * 
     * @type {string}
     * @memberof IArgsExec
     */
    name?:"execReplaceFileContentLine"|""


    /**
     * 源文件路径
     * 
     * @type {string}
     * @memberof IArgsExec
     */
    fileSource?:string

    filePath?:string
    /**
     * 目标文件路径
     * 
     * @type {string}
     * @memberof IArgsExec
     */
    fileTarget?:string
    


    textBegin?:string

    textInfo?:string
    textEnd?:string

    textReplace?:string


}