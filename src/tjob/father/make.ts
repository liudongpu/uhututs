import { IConfigPage } from './../../air/interfaces/config';
import {KJobNodeInfo, KJobPageOut, KJobFileInfo} from './../../air/keep/job';
import {IHtmlElementList, IHtmlElementInfo} from '../../air/interfaces/html';
import {TCoreHelperMap, TCoreHelperString, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile} from '../../tnode/index';
import { IJobBank } from '../../air/interfaces/job';

export abstract class FatherMake {

    makeElement(oNodeInfo : KJobNodeInfo) : KJobNodeInfo {

        let mElement = TCoreHelperMap.parseMap < IHtmlElementInfo > (this.subBank().upElementList());

        let oInfo = mElement.get(oNodeInfo.nodeName);

        oNodeInfo.itemName = oInfo.name;

        this.subElementParse(oNodeInfo);

        return oNodeInfo;
    }

    

    /**
     * 处理元素
     *
     * @abstract
     * @param {KJobNodeInfo} oNodeInfo
     * @returns {KJobNodeInfo}
     * @memberof FatherMake
     */
    protected abstract subElementParse(oNodeInfo : KJobNodeInfo) : KJobNodeInfo;

    protected abstract subWorkType() : string;



    protected abstract subBank():IJobBank;



    public abstract subPageConfig(sJson:string,fileInfo:KJobFileInfo):IConfigPage;



    makeResult(oPageOut : KJobPageOut, fileInfo : KJobFileInfo) : KJobPageOut {


        if(oPageOut.config===undefined){
            oPageOut.config=this.subPageConfig("{}",fileInfo);
        }


       
        return oPageOut;

    }

}
