import { AenumNodeType } from "../define/enumer";






export class KjobFileInfo{


    path:string

    content:string


}



/**
 * 页面输出
 * 
 * @export
 * @class KjobPageOut
 */
export class KjobPageOut{

    /**
     * 内容
     * 
     * @type {string}
     * @memberof KjobPageOut
     */
    content:string=""


    templates:KjobTemplateInfo[]=[]

}


export class KjobTemplateInfo{
    name:string=""
    content:string=""
}




export class KjobCurrentParse{

    /**
     * 节点元素
     * 
     * @type {KjobNodeInfo[]}
     * @memberof KjobCurrentParse
     */
    nodes:KjobNodeInfo[]=[]


    contents:string[]=[]


    templateFlag:boolean=false
    

    templateContents:string[]=[]


}



/**
 * 元素的基本信息
 * 
 * @export
 * @class KjobNodeInfo
 */
export class KjobNodeInfo{

    /**
     * 节点名称
     */
    nodeName:string=""


    /**
     * 节点类型
     * 
     * @type {AenumNodeType}
     * @memberof KjobElementInfo
     */
    nodeType:AenumNodeType=AenumNodeType.unknow

    
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