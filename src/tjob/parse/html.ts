import {AEnumNodeType} from './../../air/define/enumer';
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import {EParseHtml} from "../../air/export/parse";
import {IbaseKv} from '../../air/interfaces/base';
import {TCoreHelperMap} from '../../tcore/index';
import { TjobFatherMake } from '../index';

const sSetIgnore : Set < string >= new Set < string > (["html", "head", "body"]);

const sSetTemplage : Set < string >= new Set < string > (["template"]);

const sSetElement : Set < string >= new Set < string > (["div", "a"]);

const sSetScript : Set < string >= new Set < string > (["script"]);

export class ParseHtml {

    static parse(fileInfo : KJobFileInfo, make : TjobFatherMake) : KJobPageOut {

        let oResult: KJobPageOut = new KJobPageOut();

        let oCurrentPage = new KJobCurrentParse();

        let oParse = new EParseHtml({

            onopentag(sName : string, oAttr) {

                let oNodeInfo = ParseHtml.processNodeType(new KJobNodeInfo(), sName);

                ParseHtml.processNodeAttr(oNodeInfo, oAttr);

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
            oNodeInfo.nodeType = AEnumNodeType.script;
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

        if (oNodeInfo.nodeAttr.has("classs")) {
            oNodeInfo.sourceClass = oNodeInfo
                .nodeAttr
                .get("class");
        }

        return oNodeInfo;
    }

}
