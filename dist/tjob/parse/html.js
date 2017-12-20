"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("./../../air/define/enumer");
var job_1 = require("./../../air/keep/job");
var parse_1 = require("../../air/export/parse");
var index_1 = require("../../tcore/index");
var sSetIgnore = new Set(["html", "head", "body"]);
var sSetTemplage = new Set(["template"]);
var sSetElement = new Set(["div", "a"]);
var sSetScript = new Set(["script"]);
var ParseHtml = /** @class */ (function () {
    function ParseHtml() {
    }
    ParseHtml.parse = function (fileInfo, make) {
        var oResult = new job_1.KjobPageOut();
        var oCurrentPage = new job_1.KjobCurrentParse();
        var oParse = new parse_1.EParseHtml({
            onopentag: function (sName, oAttr) {
                var oNodeInfo = ParseHtml.processNodeType(new job_1.KjobNodeInfo(), sName);
                ParseHtml.processNodeAttr(oNodeInfo, oAttr);
                switch (oNodeInfo.nodeType) {
                    case enumer_1.AenumNodeType.template:
                        oCurrentPage.templateContents = [];
                        oCurrentPage.templateFlag = true;
                        break;
                    case enumer_1.AenumNodeType.element:
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
                    case enumer_1.AenumNodeType.element:
                        ParseHtml.processElementEnd(oNodeInfo, oCurrentPage);
                        break;
                    case enumer_1.AenumNodeType.template:
                        var oTemplateInfo = new job_1.KjobTemplateInfo();
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
        }, { decodeEntities: true });
        oParse.write(fileInfo.content);
        oParse.end();
        oResult.content = oCurrentPage
            .contents
            .join('');
        return oResult;
    };
    ParseHtml.processElementBegin = function (oNodeInfo, oCurrentPage) {
        var sContent = '<' + oNodeInfo.itemName + '>';
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
     * @param {KjobNodeInfo} oNodeInfo
     * @param {string} sName
     * @returns {KjobNodeInfo}
     * @memberof ParseHtml
     */
    ParseHtml.processNodeType = function (oNodeInfo, sName) {
        if (sSetIgnore.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AenumNodeType.ignore;
        }
        else if (sSetElement.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AenumNodeType.element;
        }
        else if (sSetTemplage.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AenumNodeType.template;
        }
        else if (sSetScript.has(sName)) {
            oNodeInfo.nodeType = enumer_1.AenumNodeType.script;
        }
        else {
            oNodeInfo.nodeType = enumer_1.AenumNodeType.unknow;
        }
        oNodeInfo.nodeName = sName;
        return oNodeInfo;
    };
    ParseHtml.processNodeAttr = function (oNodeInfo, oAttr) {
        oNodeInfo.nodeAttr = index_1.TcoreHelperMap.objectToMap(oAttr);
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
    };
    return ParseHtml;
}());
exports.ParseHtml = ParseHtml;
