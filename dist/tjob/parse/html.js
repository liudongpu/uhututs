import { AEnumNodeType } from './../../air/define/enumer';
import { KJobPageOut, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo } from './../../air/keep/job';
import { EParseHtml } from "../../air/export/parse";
import { TCoreHelperMap } from '../../tcore/index';
const sSetIgnore = new Set(["html", "head", "body"]);
const sSetTemplage = new Set(["template"]);
const sSetElement = new Set([
    "div",
    "a",
    "span",
    "button",
    "input",
    "img",
    "label",
    "object",
    "select"
]);
const sSetScript = new Set(["script"]);
export class ParseHtml {
    static parse(fileInfo, make) {
        let oResult = new KJobPageOut();
        let oCurrentPage = new KJobCurrentParse();
        let oParse = new EParseHtml({
            onopentag(sName, oAttr) {
                let oNodeInfo = new KJobNodeInfo();
                ParseHtml.processNodeAttr(oNodeInfo, oAttr);
                ParseHtml.processNodeType(oNodeInfo, sName);
                switch (oNodeInfo.nodeType) {
                    case AEnumNodeType.template:
                        oCurrentPage.templateContents = [];
                        oCurrentPage.templateFlag = true;
                        break;
                    case AEnumNodeType.element:
                        make.makeElement(oNodeInfo);
                        ParseHtml.processElementBegin(oNodeInfo, oCurrentPage);
                        break;
                }
                oCurrentPage
                    .nodes
                    .push(oNodeInfo);
            },
            ontext(sContent) {
                oCurrentPage.nodes[oCurrentPage.nodes.length - 1].nodeInfo = sContent;
            },
            onclosetag(sName) {
                let oNodeInfo = oCurrentPage
                    .nodes
                    .pop();
                switch (oNodeInfo.nodeType) {
                    case AEnumNodeType.element:
                        oNodeInfo.nodeInfo = make.makeFormat(oNodeInfo.nodeInfo);
                        ParseHtml.processElementEnd(oNodeInfo, oCurrentPage);
                        break;
                    case AEnumNodeType.template:
                        let oTemplateInfo = new KJobTemplateInfo();
                        oTemplateInfo.content = oCurrentPage
                            .templateContents
                            .join('');
                        oTemplateInfo.name = oNodeInfo.sourceId;
                        oResult
                            .templates
                            .push(oTemplateInfo);
                        oCurrentPage.templateFlag = false;
                        oCurrentPage.templateContents = [];
                        break;
                    case AEnumNodeType.config:
                        oResult.config = make.subPageConfig(oNodeInfo.nodeInfo, fileInfo);
                        break;
                    case AEnumNodeType.state:
                        oResult.state = oNodeInfo.nodeInfo;
                        break;
                    default:
                        break;
                }
            }
        }, { decodeEntities: true });
        oParse.write(fileInfo.content);
        oParse.end();
        oResult.content = oCurrentPage
            .contents
            .join('');
        make.makeResult(oResult, fileInfo);
        return oResult;
    }
    static processElementBegin(oNodeInfo, oCurrentPage) {
        let aAttr = [];
        aAttr.push("<" + oNodeInfo.itemName);
        if (oNodeInfo.itemAttr.size > 0) {
            oNodeInfo
                .itemAttr
                .forEach((v, k) => {
                aAttr.push(' ' + k + '=' + v);
            });
        }
        aAttr.push(">");
        let sContent = aAttr.join('');
        if (oCurrentPage.templateFlag) {
            oCurrentPage
                .templateContents
                .push(sContent);
        }
        else {
            oCurrentPage
                .contents
                .push(sContent);
        }
    }
    static processElementEnd(oNodeInfo, oCurrentPage) {
        let sContent = oNodeInfo.nodeInfo + '</' + oNodeInfo.itemName + '>';
        if (oCurrentPage.templateFlag) {
            oCurrentPage
                .templateContents
                .push(sContent);
        }
        else {
            oCurrentPage
                .contents
                .push(sContent);
        }
    }
    /**
     * 处理基本类型标记
     *
     * @private
     * @static
     * @param {KJobNodeInfo} oNodeInfo
     * @param {string} sName
     * @returns {KJobNodeInfo}
     * @memberof ParseHtml
     */
    static processNodeType(oNodeInfo, sName) {
        if (sSetIgnore.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.ignore;
        }
        else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.element;
        }
        else if (sSetTemplage.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.template;
        }
        else if (sSetScript.has(sName)) {
            switch (oNodeInfo.sourceType) {
                case "json/config":
                    oNodeInfo.nodeType = AEnumNodeType.config;
                    break;
                case "json/state":
                    oNodeInfo.nodeType = AEnumNodeType.state;
                    break;
                default:
                    oNodeInfo.nodeType = AEnumNodeType.script;
                    break;
            }
        }
        else {
            oNodeInfo.nodeType = AEnumNodeType.unknow;
        }
        oNodeInfo.nodeName = sName;
        return oNodeInfo;
    }
    static processNodeAttr(oNodeInfo, oAttr) {
        oNodeInfo.nodeAttr = TCoreHelperMap.objectToMap(oAttr);
        if (oNodeInfo.nodeAttr.has("id")) {
            oNodeInfo.sourceId = oNodeInfo
                .nodeAttr
                .get("id");
        }
        if (oNodeInfo.nodeAttr.has("class")) {
            oNodeInfo.sourceClass = oNodeInfo
                .nodeAttr
                .get("class");
        }
        if (oNodeInfo.nodeAttr.has("type")) {
            oNodeInfo.sourceType = oNodeInfo
                .nodeAttr
                .get("type");
        }
        return oNodeInfo;
    }
}
