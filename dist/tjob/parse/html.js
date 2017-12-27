"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("./../../air/define/enumer");
var job_1 = require("./../../air/keep/job");
var parse_1 = require("../../air/export/parse");
var index_1 = require("../../tcore/index");
var sSetIgnore = new Set(["html", "head", "body"]);
var sSetTemplage = new Set(["template"]);
var sSetElement = new Set([
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
var sSetScript = new Set(["script"]);
var ParseHtml = /** @class */ (function () {
    function ParseHtml() {
    }
    ParseHtml.parse = function (fileInfo, make) {
        var oResult = new job_1.KJobPageOut();
        var oCurrentPage = new job_1.KJobCurrentParse();
        var oParse = new parse_1.EParseHtml({
            onopentag: function (sName, oAttr) {
                var oNodeInfo = new job_1.KJobNodeInfo();
                ParseHtml.processNodeAttr(oNodeInfo, oAttr);
                ParseHtml.processNodeType(oNodeInfo, sName);
                switch (oNodeInfo.nodeType) {
                    case enumer_1.AEnumNodeType.template:
                        oCurrentPage.templateContents = [];
                        oCurrentPage.templateFlag = true;
                        break;
                    case enumer_1.AEnumNodeType.element:
                        make.makeElement(oNodeInfo);
                        ParseHtml.processElementBegin(oNodeInfo, oCurrentPage);
                        break;
                }
                oCurrentPage
                    .nodes
                    .push(oNodeInfo);
            },
            ontext: function (sContent) {
                oCurrentPage.nodes[oCurrentPage.nodes.length - 1].nodeInfo = sContent;
            },
            onclosetag: function (sName) {
                var oNodeInfo = oCurrentPage
                    .nodes
                    .pop();
                switch (oNodeInfo.nodeType) {
                    case enumer_1.AEnumNodeType.element:
                        ParseHtml.processElementEnd(oNodeInfo, oCurrentPage);
                        break;
                    case enumer_1.AEnumNodeType.template:
                        var oTemplateInfo = new job_1.KJobTemplateInfo();
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
                    case enumer_1.AEnumNodeType.config:
                        oResult.config = make.subPageConfig(oNodeInfo.nodeInfo, fileInfo);
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
    };
    ParseHtml.processElementBegin = function (oNodeInfo, oCurrentPage) {
        var aAttr = [];
        aAttr.push("<" + oNodeInfo.itemName);
        if (oNodeInfo.itemAttr.size > 0) {
            oNodeInfo
                .itemAttr
                .forEach(function (v, k) {
                aAttr.push(' ' + k + '=' + v);
            });
        }
        aAttr.push(">");
        var sContent = aAttr.join('');
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
    };
    ParseHtml.processElementEnd = function (oNodeInfo, oCurrentPage) {
        var sContent = oNodeInfo.nodeInfo + '</' + oNodeInfo.itemName + '>';
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
    };
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
    ParseHtml.processNodeType = function (oNodeInfo, sName) {
        if (sSetIgnore.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AEnumNodeType.ignore;
        }
        else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AEnumNodeType.element;
        }
        else if (sSetTemplage.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AEnumNodeType.template;
        }
        else if (sSetScript.has(sName)) {
            switch (oNodeInfo.sourceType) {
                case "json/config":
                    oNodeInfo.nodeType = enumer_1.AEnumNodeType.config;
                    break;
                default:
                    oNodeInfo.nodeType = enumer_1.AEnumNodeType.script;
                    break;
            }
        }
        else {
            oNodeInfo.nodeType = enumer_1.AEnumNodeType.unknow;
        }
        oNodeInfo.nodeName = sName;
        return oNodeInfo;
    };
    ParseHtml.processNodeAttr = function (oNodeInfo, oAttr) {
        oNodeInfo.nodeAttr = index_1.TCoreHelperMap.objectToMap(oAttr);
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
    };
    return ParseHtml;
}());
exports.ParseHtml = ParseHtml;
