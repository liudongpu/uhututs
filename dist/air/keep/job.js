"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("../define/enumer");
var KjobFileInfo = /** @class */ (function () {
    function KjobFileInfo() {
    }
    return KjobFileInfo;
}());
exports.KjobFileInfo = KjobFileInfo;
/**
 * 页面输出
 *
 * @export
 * @class KjobPageOut
 */
var KjobPageOut = /** @class */ (function () {
    function KjobPageOut() {
        /**
         * 内容
         *
         * @type {string}
         * @memberof KjobPageOut
         */
        this.content = "";
        this.templates = [];
    }
    return KjobPageOut;
}());
exports.KjobPageOut = KjobPageOut;
var KjobTemplateInfo = /** @class */ (function () {
    function KjobTemplateInfo() {
        this.name = "";
        this.content = "";
    }
    return KjobTemplateInfo;
}());
exports.KjobTemplateInfo = KjobTemplateInfo;
var KjobCurrentParse = /** @class */ (function () {
    function KjobCurrentParse() {
        /**
         * 节点元素
         *
         * @type {KjobNodeInfo[]}
         * @memberof KjobCurrentParse
         */
        this.nodes = [];
        this.contents = [];
        this.templateFlag = false;
        this.templateContents = [];
    }
    return KjobCurrentParse;
}());
exports.KjobCurrentParse = KjobCurrentParse;
/**
 * 元素的基本信息
 *
 * @export
 * @class KjobNodeInfo
 */
var KjobNodeInfo = /** @class */ (function () {
    function KjobNodeInfo() {
        /**
         * 节点名称
         */
        this.nodeName = "";
        /**
         * 节点类型
         *
         * @type {AenumNodeType}
         * @memberof KjobElementInfo
         */
        this.nodeType = enumer_1.AenumNodeType.unknow;
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
    return KjobNodeInfo;
}());
exports.KjobNodeInfo = KjobNodeInfo;
