import { IConfigPage } from './../interfaces/config';
import { AEnumNodeType } from "../define/enumer";
import { IbaseKv } from '../interfaces/base';






export class KJobFileInfo{


    path:string


    name:string

    content:string


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


    templates:KJobTemplateInfo[]=[]


    imports:kJobImportJs[]=[]


    init:string=""

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



    nodeInfo:string=""



    sourceId:string
    sourceClass:string
    sourceType:string

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



    

    


}