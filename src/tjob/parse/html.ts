import {IConfigPage} from './../../air/interfaces/config';
import {AEnumNodeType} from './../../air/define/enumer';
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import {EParseHtml} from "../../air/export/parse";
import {IbaseKv} from '../../air/interfaces/base';
import {TCoreHelperMap, TCoreCommonFunc} from '../../tcore/index';
import {TjobFatherMake} from '../index';

const sSetIgnore : Set < string >= new Set < string > (["html", "head", "body"]);

const sSetTemplage : Set < string >= new Set < string > (["template"]);

const sSetElement : Set < string >= new Set < string > (["div", "a", "span","button","input","img","label","select"]);

const sSetScript : Set < string >= new Set < string > (["script"]);

export class ParseHtml {

    static parse(fileInfo : KJobFileInfo, make : TjobFatherMake) : KJobPageOut {

        let oResult: KJobPageOut = new KJobPageOut();

        let oCurrentPage = new KJobCurrentParse();

        let oParse = new EParseHtml({

            onopentag(sName : string, oAttr) {

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
                        oResult.config = TCoreCommonFunc.jsonParse < IConfigPage > (oNodeInfo.nodeInfo);
                        break;
                    default:

                        break;

                }

            }

        }, {decodeEntities: true});

        oParse.write(fileInfo.content);

        oParse.end();

        oResult.content = oCurrentPage
            .contents
            .join('');

        make.makeResult(oResult, fileInfo);

        return oResult;

    }

    private static processElementBegin(oNodeInfo : KJobNodeInfo, oCurrentPage : KJobCurrentParse) {

        let sContent = '<' + oNodeInfo.itemName + '>';

        if (oCurrentPage.templateFlag) {
            oCurrentPage
                .templateContents
                .push(sContent);
        } else {
            oCurrentPage
                .contents
                .push(sContent);
        }

    }

    private static processElementEnd(oNodeInfo : KJobNodeInfo, oCurrentPage : KJobCurrentParse) {

        let sContent = oNodeInfo.nodeInfo + '</' + oNodeInfo.itemName + '>';

        if (oCurrentPage.templateFlag) {
            oCurrentPage
                .templateContents
                .push(sContent);
        } else {
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
    private static processNodeType(oNodeInfo : KJobNodeInfo, sName : string) : KJobNodeInfo {

        if(sSetIgnore.has(sName)) {

            oNodeInfo.nodeType = AEnumNodeType.ignore;
        } else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.element;
        } else if (sSetTemplage.has(sName)) {

            oNodeInfo.nodeType = AEnumNodeType.template;
        } else if (sSetScript.has(sName)) {

            switch (oNodeInfo.sourceType) {

                case "json/config":
                    oNodeInfo.nodeType = AEnumNodeType.config;
                    break;

                default:
                    oNodeInfo.nodeType = AEnumNodeType.script;
                    break;
            }

        } else {
            oNodeInfo.nodeType = AEnumNodeType.unknow;
        }

        oNodeInfo.nodeName = sName;

        return oNodeInfo;

    }

    private static processNodeAttr(oNodeInfo : KJobNodeInfo, oAttr : IbaseKv) : KJobNodeInfo {

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
