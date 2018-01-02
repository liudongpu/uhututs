import { AEnumRegexKey } from './../../air/define/enumer';
import { TCoreHelperMap, TBase } from '../../tcore/index';
export class FatherMake {
    makeElement(oNodeInfo) {
        let mElement = TCoreHelperMap.parseMap(this.subBank().upElementList());
        let oInfo = mElement.get(oNodeInfo.nodeName);
        oNodeInfo.itemName = oInfo.name;
        if (oInfo.typeName) {
            let mTypeName = TCoreHelperMap.objectToMap(oInfo.typeName);
            if (mTypeName.has(oNodeInfo.sourceType)) {
                oNodeInfo.itemName = mTypeName.get(oNodeInfo.sourceType);
            }
        }
        this.subElementParse(oNodeInfo);
        return oNodeInfo;
    }
    makeResult(oPageOut, fileInfo) {
        if (oPageOut.config === undefined) {
            oPageOut.config = this.subPageConfig("{}", fileInfo);
        }
        return oPageOut;
    }
    makeFormat(sStr) {
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
            // 这里hack一个bug 属性已经加了双引号 sReturn = sReturn.replace("{{", "{").replace("}}", "}");
        }
        return sReturn;
    }
}
