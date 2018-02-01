"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("./../../air/define/enumer");
var index_1 = require("../../tcore/index");
var index_2 = require("../../tdaemon/index");
var FatherMake = /** @class */ (function () {
    function FatherMake() {
    }
    FatherMake.prototype.init = function (configParse) {
        this.oConfigParse = configParse;
    };
    FatherMake.prototype.upConfigParse = function () { return this.oConfigParse; };
    FatherMake.prototype.makeElement = function (oNodeInfo) {
        var mElement = index_1.TCoreHelperMap.parseMap(this.subBank().upElementList());
        var sName = oNodeInfo.nodeName;
        if (oNodeInfo.sourceType) {
            sName = sName + "_" + oNodeInfo.sourceType;
        }
        if (!mElement.has(sName)) {
            index_2.TBase.logError(3911003, [sName]);
            sName = "div";
        }
        if (mElement.has(sName)) {
            var oInfo = mElement.get(sName);
            oNodeInfo.itemName = oInfo.name;
            if (oInfo.attrDefault) {
                oNodeInfo.itemAttr = index_1.TCoreHelperMap.parseMap(oInfo.attrDefault);
            }
            this.subElementParse(oNodeInfo);
        }
        return oNodeInfo;
    };
    FatherMake.prototype.makeResult = function (oPageOut, fileInfo) {
        if (oPageOut.config === undefined) {
            oPageOut.config = this.subPageConfig("{}", fileInfo);
        }
        return this.subPageOut(oPageOut);
    };
    FatherMake.prototype.makeFormat = function (sStr) {
        var sReturn = sStr;
        if (sStr.indexOf(index_2.TBase.defineBase().regexOutBegin) > -1) {
            var reg = new RegExp("\\" + index_2.TBase.defineBase().regexOutBegin + index_2.TBase.defineBase().regexBaseString + "\\" + index_2.TBase.defineBase().regexOutEnd, "g");
            var r = [];
            var eKey = enumer_1.AEnumRegexKey.unknow;
            while (r = reg.exec(sStr)) {
                var sReplace = r[0];
                switch (r[1]) {
                    //state变量
                    case "state":
                        eKey = enumer_1.AEnumRegexKey.state;
                        break;
                    case "item":
                        eKey = enumer_1.AEnumRegexKey.item;
                        break;
                    //变量替换
                    case "env":
                        eKey = enumer_1.AEnumRegexKey.env;
                        break;
                    //直接输出
                    case "tag":
                        eKey = enumer_1.AEnumRegexKey.tag;
                        break;
                    //指向this
                    case "this":
                        eKey = enumer_1.AEnumRegexKey.this;
                        break;
                    default:
                        break;
                }
                if (eKey != enumer_1.AEnumRegexKey.unknow) {
                    sReturn = sReturn.replace(r[0], this.subFormat(eKey, r[2]));
                }
            }
            // 这里hack一个bug 属性已经加了双引号 sReturn = sReturn.replace("{{", "{").replace("}}",
            // "}");
        }
        return sReturn;
    };
    return FatherMake;
}());
exports.FatherMake = FatherMake;
