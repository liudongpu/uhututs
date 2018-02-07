import { IConfigPage } from './../interfaces/config';
import { AEnumNodeType } from "../define/enumer";
import { IbaseKv } from '../interfaces/base';






export class KJobFileInfo{


    path:string


    name:string

    content:string


    script:string


}



/**
 * 页面输出
 * 
 * @export
 * @class KJobPageOut
 */
export class KJobPageOut{

    /**
     * 内容
     * 
     * @type {string}
     * @memberof KjobPageOut
     */
    content:string=""

    config:IConfigPage


    state:string="{}"

    /**
     * 方法
     * 
     * @type {KJobMethodInfo[]}
     * @memberof KJobPageOut
     */
    methods:KJobMethodInfo[]=[]

    templates:KJobTemplateInfo[]=[]


    imports:kJobImportJs[]=[]


    init:string=""


    unload:string=""

}



export class KJobMethodInfo{
    name:string=""
    method:string=""
}





export class  kJobImportJs {
    name:string=""
    from:string=""
}


export class KJobTemplateInfo{
    name:string=""
    content:string=""
}




export class KJobCurrentParse{

    /**
     * 节点元素
     * 
     * @type {KJobNodeInfo[]}
     * @memberof KjobCurrentParse
     */
    nodes:KJobNodeInfo[]=[]


    contents:string[]=[]


    formName:string=""


    templateFlag:boolean=false
    

    templateContents:string[]=[]


}



/**
 * 元素的基本信息
 * 
 * @export
 * @class KJobNodeInfo
 */
export class KJobNodeInfo{

    /**
     * 节点名称
     */
    nodeName:string=""


    /**
     * 节点类型
     * 
     * @type {AEnumNodeType}
     * @memberof KjobElementInfo
     */
    nodeType:AEnumNodeType=AEnumNodeType.unknow

    
    /**
     * 节点属性
     * 
     * @type {Map<string,string>}
     * @memberof KjobElementInfo
     */
    nodeAttr:Map<string,string>=new Map<string,string>()


    /**
     * 节点内容
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    nodeInfo:string=""


    /**
     * 源id
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    sourceId:string
    /**
     * 源样式
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    sourceClass:string
    /**
     * 源类型
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    sourceType:string

    /**
     * 源名称
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    sourceName:string



    /**
     * 元素名称
     * 
     * @type {string}
     * @memberof KjobElementInfo
     */
    itemName:string=""
    
    
    /**
     * 元素属性
     * 
     * @type {Map<string,string>}
     * @memberof KjobElementInfo
     */
    itemAttr:Map<string,string>=new Map<string,string>()



    /**
     * 内容前插入
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    contentBefore:string=""

    /**
     * 内容后插入
     * 
     * @type {string}
     * @memberof KJobNodeInfo
     */
    contentAfter:string=""
    

    


}