import { IConfigPage } from './../../air/interfaces/config';
import {KJobNodeInfo, KJobPageOut, KJobFileInfo} from './../../air/keep/job';
import {IhtmlElementList, IhtmlElementInfo} from '../../air/interfaces/html';
import {TCoreHelperMap, TCoreHelperString, TCoreHelperObject} from '../../tcore/index';
import {TNodeIoFile} from '../../tnode/index';

export abstract class FatherMake {

    makeElement(oNodeInfo : KJobNodeInfo) : KJobNodeInfo {

        let mElement = TCoreHelperMap.parseMap < IhtmlElementInfo > (this.subElementTrans());

        let oInfo = mElement.get(oNodeInfo.nodeName);

        oNodeInfo.itemName = oInfo.name;

        this.subElementParse(oNodeInfo);

        return oNodeInfo;
    }

    protected abstract subElementTrans() : IhtmlElementList;

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

    makeResult(oPageOut : KJobPageOut, fileInfo : KJobFileInfo) : KJobPageOut {


        if(oPageOut.config===undefined){
            oPageOut.config=TCoreHelperObject.parseTs<IConfigPage>({});
        }


        if(oPageOut.config) {
            if (TCoreHelperString.isEmpty(oPageOut.config.macroUrl)) {
                oPageOut.config.macroUrl =    "dev/resources/macro/" + this.subWorkType() + ".mustache";
            } else {
                oPageOut.config.macroUrl = TNodeIoFile.pathNormalize(TNodeIoFile.pathJoin(TNodeIoFile.parentPath(fileInfo.path), oPageOut.config.macroUrl))
            }

        }

        return oPageOut;

    }

}
