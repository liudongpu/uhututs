import { AenumNodeType } from "../define/enumer";






export class KjobFileInfo{

}




export class KjobPageOut{

    /**
     * 内容
     * 
     * @type {string[]}
     * @memberof KjobPageOut
     */
    contentInfos:string[]=[]

}




/**
 * 元素的基本信息
 * 
 * @export
 * @class KjobElementInfo
 */
export class KjobElementInfo{

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