import {AEnumRegexKey} from './../../air/define/enumer';
import {IConfigPage} from './../../air/interfaces/config';
import {KJobNodeInfo, KJobPageOut, KJobFileInfo} from './../../air/keep/job';
import {IHtmlElementList, IHtmlElementInfo} from '../../air/interfaces/html';
import {TCoreHelperMap, TCoreHelperString, TCoreHelperObject, TBase} from '../../tcore/index';
import {TNodeIoFile} from '../../tnode/index';
import {IJobBank} from '../../air/interfaces/job';

export abstract class FatherMake {

    makeElement(oNodeInfo : KJobNodeInfo) : KJobNodeInfo {

        let mElement = TCoreHelperMap.parseMap < IHtmlElementInfo > (this.subBank().upElementList());

        let sName = oNodeInfo.nodeName;
        if (oNodeInfo.sourceType) {
            sName = sName + "_" + oNodeInfo.sourceType;
        }

        if (!mElement.has(sName)) {

            TBase.logError(3911003, [sName]);
            sName = "div";
        }

        if (mElement.has(sName)) {
            let oInfo = mElement.get(sName);

            oNodeInfo.itemName = oInfo.name;

            if (oInfo.attrDefault) {

                oNodeInfo.itemAttr = TCoreHelperMap.parseMap(oInfo.attrDefault);

            }

            this.subElementParse(oNodeInfo);

        }

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

    protected abstract subBank() : IJobBank;

    public abstract subPageConfig(sJson : string, fileInfo : KJobFileInfo) : IConfigPage;

    protected abstract subPageOut(oPageOut : KJobPageOut) : KJobPageOut;

    makeResult(oPageOut : KJobPageOut, fileInfo : KJobFileInfo) : KJobPageOut {

        if(oPageOut.config === undefined) {
            oPageOut.config = this.subPageConfig("{}", fileInfo);
        }

        return this.subPageOut(oPageOut);

    }

    protected abstract subFormat(eKey : AEnumRegexKey, sValue : string) : string;

    makeFormat(sStr : string) : string {
        var sReturn = sStr;

        if (sStr.indexOf(TBase.defineBase().regexOutBegin) > -1) {

            var reg = new RegExp("\\" + TBase.defineBase().regexOutBegin + TBase.defineBase().regexBaseString + "\\" + TBase.defineBase().regexOutEnd, "g");

            let r = [];

            let eKey = AEnumRegexKey.unknow;

            while (r = reg.exec(sStr)) {
                var sReplace = r[0];
                switch (r[1]) {
                        //state变量
                    case "state":
                        eKey = AEnumRegexKey.state;
                        break;
                    case "item":
                        eKey = AEnumRegexKey.item;
                        break;
                        //变量替换
                    case "env":
                        eKey = AEnumRegexKey.env;
                        break;
                        //直接输出
                    case "tag":
                        eKey = AEnumRegexKey.tag;
                        break;
                        //指向this
                    case "this":
                        eKey = AEnumRegexKey.this;
                        break;

                    default:
                        break;
                }

                if (eKey != AEnumRegexKey.unknow) {
                    sReturn = sReturn.replace(r[0], this.subFormat(eKey, r[2]));
                }

            }

            // 这里hack一个bug 属性已经加了双引号 sReturn = sReturn.replace("{{", "{").replace("}}",
            // "}");

        }
        return sReturn;

    }

}
