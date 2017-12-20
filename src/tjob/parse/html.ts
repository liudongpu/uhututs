import {AenumNodeType} from './../../air/define/enumer';
import {KjobPageOut, KjobFileInfo, KjobCurrentParse, KjobNodeInfo, KjobTemplateInfo} from './../../air/keep/job';
import {EParseHtml} from "../../air/export/parse";
import {IbaseKv} from '../../air/interfaces/base';
import {TcoreHelperMap} from '../../tcore/index';
import { TjobFatherMake } from '../index';

const sSetIgnore : Set < string >= new Set < string > (["html", "head", "body"]);

const sSetTemplage : Set < string >= new Set < string > (["template"]);

const sSetElement : Set < string >= new Set < string > (["div", "a"]);

const sSetScript : Set < string >= new Set < string > (["script"]);

export class ParseHtml {

    static parse(fileInfo : KjobFileInfo, make : TjobFatherMake) : KjobPageOut {

        let oResult: KjobPageOut = new KjobPageOut();

        let oCurrentPage = new KjobCurrentParse();

        let oParse = new EParseHtml({

            onopentag(sName : string, oAttr) {

                let oNodeInfo = ParseHtml.processNodeType(new KjobNodeInfo(), sName);

                ParseHtml.processNodeAttr(oNodeInfo, oAttr);

                switch (oNodeInfo.nodeType) {
                    case AenumNodeType.template:
                        oCurrentPage.templateContents = [];
                        oCurrentPage.templateFlag = true;
                        break;

                    case AenumNodeType.element:

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

                    case AenumNodeType.element:

                        ParseHtml.processElementEnd(oNodeInfo, oCurrentPage);

                        break;

                    case AenumNodeType.template:

                        let oTemplateInfo = new KjobTemplateInfo();
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

    private static processElementBegin(oNodeInfo : KjobNodeInfo, oCurrentPage : KjobCurrentParse) {

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

    private static processElementEnd(oNodeInfo : KjobNodeInfo, oCurrentPage : KjobCurrentParse) {

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
     * @param {KjobNodeInfo} oNodeInfo
     * @param {string} sName
     * @returns {KjobNodeInfo}
     * @memberof ParseHtml
     */
    private static processNodeType(oNodeInfo : KjobNodeInfo, sName : string) : KjobNodeInfo {

        if(sSetIgnore.has(sName)) {

            oNodeInfo.nodeType = AenumNodeType.ignore;
        } else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = AenumNodeType.element;
        } else if (sSetTemplage.has(sName)) {

            oNodeInfo.nodeType = AenumNodeType.template;
        } else if (sSetScript.has(sName)) {
            oNodeInfo.nodeType = AenumNodeType.script;
        } else {
            oNodeInfo.nodeType = AenumNodeType.unknow;
        }

        oNodeInfo.nodeName = sName;

        return oNodeInfo;

    }

    private static processNodeAttr(oNodeInfo : KjobNodeInfo, oAttr : IbaseKv) : KjobNodeInfo {

        oNodeInfo.nodeAttr = TcoreHelperMap.objectToMap(oAttr);

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
