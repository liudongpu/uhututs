import { KJobNodeInfo } from './../../air/keep/job';
import { IhtmlElementList, IhtmlElementInfo } from '../../air/interfaces/html';
import { TCoreHelperMap } from '../../tcore/index';



export abstract class FatherMake {
   



    makeElement(oNodeInfo : KJobNodeInfo):KJobNodeInfo{


      

       let mElement=  TCoreHelperMap.parseMap<IhtmlElementInfo>(this.subElementTrans());


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
     * @param {KJobNodeInfo} oNodeInfo 
     * @returns {KJobNodeInfo} 
     * @memberof FatherMake
     */
    protected abstract subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo;

}

