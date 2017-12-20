import { KjobNodeInfo } from './../../air/keep/job';
import { IhtmlElementList, IhtmlElementInfo } from '../../air/interfaces/html';
import { TcoreHelperMap } from '../../tcore/index';



export abstract class FatherMake {
   



    makeElement(oNodeInfo : KjobNodeInfo):KjobNodeInfo{


      

       let mElement=  TcoreHelperMap.parseMap<IhtmlElementInfo>(this.subElementTrans());


       let oInfo=mElement.get(oNodeInfo.nodeName);

       oNodeInfo.itemName=oInfo.name;





        this.subElementParse(oNodeInfo);

        return oNodeInfo;
    }


    
    protected abstract subElementTrans():IhtmlElementList;



    /**
     * 处理元素
     * 
     * @abstract
     * @param {KjobNodeInfo} oNodeInfo 
     * @returns {KjobNodeInfo} 
     * @memberof FatherMake
     */
    protected abstract subElementParse(oNodeInfo : KjobNodeInfo):KjobNodeInfo;

}

