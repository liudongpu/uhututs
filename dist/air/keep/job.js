"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("../define/enumer");
var KJobFileInfo = /** @class */ (function () {
    function KJobFileInfo() {
    }
    return KJobFileInfo;
}());
exports.KJobFileInfo = KJobFileInfo;
/**
 * 页面输出
 *
 * @export
 * @class KJobPageOut
 */
var KJobPageOut = /** @class */ (function () {
    function KJobPageOut() {
        /**
         * 内容
         *
         * @type {string}
         * @memberof KjobPageOut
         */
        this.content = "";
        this.state = "{}";
        this.templates = [];
    }
    return KJobPageOut;
}());
exports.KJobPageOut = KJobPageOut;
var KJobTemplateInfo = /** @class */ (function () {
    function KJobTemplateInfo() {
        this.name = "";
        this.content = "";
    }
    return KJobTemplateInfo;
}());
exports.KJobTemplateInfo = KJobTemplateInfo;
var KJobCurrentParse = /** @class */ (function () {
    function KJobCurrentParse() {
        /**
         * 节点元素
         *
         * @type {KJobNodeInfo[]}
         * @memberof KjobCurrentParse
         */
        this.nodes = [];
        this.contents = [];
        this.templateFlag = false;
        this.templateContents = [];
    }
    return KJobCurrentParse;
}());
exports.KJobCurrentParse = KJobCurrentParse;
/**
 * 元素的基本信息
 *
 * @export
 * @class KJobNodeInfo
 */
var KJobNodeInfo = /** @class */ (function () {
    function KJobNodeInfo() {
        /**
         * 节点名称
         */
        this.nodeName = "";
        /**
         * 节点类型
         *
         * @type {AEnumNodeType}
         * @memberof KjobElementInfo
         */
        this.nodeType = enumer_1.AEnumNodeType.unknow;
        /**
         * 节点属性
         *
         * @type {Map<string,string>}
         * @memberof KjobElementInfo
         */
        this.nodeAttr = new Map();
        this.nodeInfo = "";
        /**
         * 元素名称
         *
         * @type {string}
         * @memberof KjobElementInfo
         */
        this.itemName = "";
        /**
         * 元素属性
         *
         * @type {Map<string,string>}
         * @memberof KjobElementInfo
         */
        this.itemAttr = new Map();
    }
    return KJobNodeInfo;
}());
exports.KJobNodeInfo = KJobNodeInfo;
