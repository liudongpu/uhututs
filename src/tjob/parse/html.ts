import {IJobScript} from './../../air/interfaces/job';
import {IConfigPage} from './../../air/interfaces/config';
import {AEnumNodeType} from './../../air/define/enumer';
import {
    KJobPageOut,
    KJobFileInfo,
    KJobCurrentParse,
    KJobNodeInfo,
    KJobTemplateInfo,
    kJobImportJs,
    KJobMethodInfo,
    KJobEffectScript
} from './../../air/keep/job';
import {EParseHtml} from "../../air/export/parse";
import {IbaseKv} from '../../air/interfaces/base';
import {TCoreHelperMap, TCoreCommonFunc} from '../../tcore/index';
import {TjobFatherMake} from '../index';
import { TBase } from '../../tdaemon/index';
import { EffectScript } from '../effect/script';

const sSetIgnore : Set < string > = new Set < string > (["html", "head", "body"]);

const sSetTemplage : Set < string > = new Set < string > (["template"]);

const sSetForm : Set < string > = new Set < string > (["form"]);

const sSetElement : Set < string > = new Set < string > ([
    "div",
    "main",
    "a",
    "span",
    "button",
    "input",
    "img",
    "label",
    "object",
    "textarea",
    "iframe",
    "i",
    "select"
]);

const sSetScript : Set < string > = new Set < string > (["script"]);

export class ParseHtml {

    static parse(fileInfo : KJobFileInfo, make : TjobFatherMake) : KJobPageOut {

        let oResult: KJobPageOut = new KJobPageOut();

        this.processScript(oResult, fileInfo, make);

        let oCurrentPage = new KJobCurrentParse();

        let oParse = new EParseHtml({

            onopentag(sName : string, oAttr) {

                let oNodeInfo = new KJobNodeInfo();

                ParseHtml.processNodeAttr(oNodeInfo, oAttr);

                ParseHtml.processNodeType(oNodeInfo, sName);

                ParseHtml.processNodeFormat(oNodeInfo, oCurrentPage);

                switch (oNodeInfo.nodeType) {
                    case AEnumNodeType.template:
                        oCurrentPage.templateContents = [];
                        oCurrentPage.templateFlag = true;
                        break;

                    case AEnumNodeType.form:

                        oCurrentPage.formName = oNodeInfo.sourceName;
                        break;

                    case AEnumNodeType.element:

                        make.makeElement(oNodeInfo);

                        ParseHtml.processElementBegin(oNodeInfo, oCurrentPage);


                        if(oNodeInfo.itemMethods.length>0){
                            oResult.methods=oResult.methods.concat(oNodeInfo.itemMethods);
                        }

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

                    case AEnumNodeType.form:

                        oCurrentPage.formName = '';
                        break;

                    case AEnumNodeType.config:
                        oResult.config = make.subPageConfig(oNodeInfo.nodeInfo, fileInfo);
                        break;

                    case AEnumNodeType.state:
                        oResult.state = oNodeInfo.nodeInfo;
                        break;

                    case AEnumNodeType.init:
                        oResult.init = oNodeInfo.nodeInfo;
                        break;

                    case AEnumNodeType.unload:
                        oResult.unload = oNodeInfo.nodeInfo;
                        break;

                    case AEnumNodeType.import:

                        let oImport = new kJobImportJs();

                        oImport.name = oNodeInfo.sourceId;
                        oImport.from = oNodeInfo
                            .nodeAttr
                            .get("src");

                        oResult
                            .imports
                            .push(oImport);
                        break;

                    default:

                        break;

                }

            }

        }, {
            decodeEntities: true,
            lowerCaseAttributeNames: false
        });

        oParse.write(fileInfo.content);

        oParse.end();

        oResult.content = oCurrentPage
            .contents
            .join('');

        make.makeResult(oResult, fileInfo);

        return oResult;

    }

    private static processScript(oResult : KJobPageOut, fileInfo : KJobFileInfo, make : TjobFatherMake) {

        if (fileInfo.script != "") {

            let oScriptInfo :KJobEffectScript;

            

            try {
                oScriptInfo = EffectScript.analyseScript(fileInfo.script);



            } catch (e) {
                TBase.logError(3911004,[fileInfo.path,e.toString()]);
            }

            oResult.imports=oResult.imports.concat(oScriptInfo.imports);

           
           

            for (var p in oScriptInfo.script) {

                let v = oScriptInfo.script[p];

                switch (p) {

                    case "state":
                        oResult.state = JSON.stringify(v);
                        break;

                    case "config":

                        oResult.config = make.subPageConfig(JSON.stringify(v), fileInfo);
                        break;

                    case "init":
                        oResult.init = v;
                        break;
                    case "unload":
                        oResult.unload = v;
                        break;

                    default:

                        if (p.startsWith(TBase.defineBase().nameBind)) {

                            let oMethod = new KJobMethodInfo();
                            oMethod.name = p.substr(TBase.defineBase().nameBind.length);
                            oMethod.method = v.toString();
                            oResult
                                .methods
                                .push(oMethod);

                        }

                        break;
                }

            }

        }

    }

    private static processElementBegin(oNodeInfo : KJobNodeInfo, oCurrentPage : KJobCurrentParse) {

        let aAttr = [];

        aAttr.push(oNodeInfo.contentBefore);

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
        } else {
            oCurrentPage
                .contents
                .push(sContent);
        }

    }

    private static processElementEnd(oNodeInfo : KJobNodeInfo, oCurrentPage : KJobCurrentParse) {

        let sContent = oNodeInfo.nodeInfo + '</' + oNodeInfo.itemName + '>' + oNodeInfo.contentAfter;

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
    protected static processNodeType(oNodeInfo : KJobNodeInfo, sName : string) : KJobNodeInfo {

        if(sSetIgnore.has(sName)) {

            oNodeInfo.nodeType = AEnumNodeType.ignore;
        } else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.element;
        } else if (sSetTemplage.has(sName)) {

            oNodeInfo.nodeType = AEnumNodeType.template;
        } else if (sSetForm.has(sName)) {
            oNodeInfo.nodeType = AEnumNodeType.form;
        } else if (sSetScript.has(sName)) {

            switch (oNodeInfo.sourceType) {

                case "json/config":
                    oNodeInfo.nodeType = AEnumNodeType.config;
                    break;
                case "json/state":
                    oNodeInfo.nodeType = AEnumNodeType.state;
                    break;

                case "js/import":
                    oNodeInfo.nodeType = AEnumNodeType.import;
                    break;
                case "js/init":
                    oNodeInfo.nodeType = AEnumNodeType.init;
                    break;
                case "js/unload":
                    oNodeInfo.nodeType = AEnumNodeType.unload;
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

    protected static processNodeFormat(oNodeInfo : KJobNodeInfo, oCurrentPage : KJobCurrentParse) : KJobNodeInfo {

        if(oNodeInfo.sourceName && oCurrentPage.formName) {

            oNodeInfo.sourceName = 'form_' + oCurrentPage.formName + '_' + oNodeInfo.sourceName;

        }

        return oNodeInfo;
    }

    protected static processNodeAttr(oNodeInfo : KJobNodeInfo, oAttr : IbaseKv) : KJobNodeInfo {

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

        if (oNodeInfo.nodeAttr.has("name")) {
            oNodeInfo.sourceName = oNodeInfo
                .nodeAttr
                .get("name");
        }

        return oNodeInfo;
    }

}
