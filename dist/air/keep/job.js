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
        /**
         * 方法
         *
         * @type {KJobMethodInfo[]}
         * @memberof KJobPageOut
         */
        this.methods = [];
        this.templates = [];
        this.imports = [];
        this.init = "";
        this.unload = "";
    }
    return KJobPageOut;
}());
exports.KJobPageOut = KJobPageOut;
var KJobMethodInfo = /** @class */ (function () {
    function KJobMethodInfo() {
        this.name = "";
        this.method = "";
    }
    return KJobMethodInfo;
}());
exports.KJobMethodInfo = KJobMethodInfo;
var kJobImportJs = /** @class */ (function () {
    function kJobImportJs() {
        this.name = "";
        this.from = "";
    }
    return kJobImportJs;
}());
exports.kJobImportJs = kJobImportJs;
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
        this.formName = "";
        this.templateFlag = false;
        this.templateContents = [];
    }
    return KJobCurrentParse;
}());
exports.KJobCurrentParse = KJobCurrentParse;
var KJobEffectScript = /** @class */ (function () {
    function KJobEffectScript() {
        this.imports = [];
        this.script = {};
    }
    return KJobEffectScript;
}());
exports.KJobEffectScript = KJobEffectScript;
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
        /**
         * 节点内容
         *
         * @type {string}
         * @memberof KJobNodeInfo
         */
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
        /**
         * 内容前插入
         *
         * @type {string}
         * @memberof KJobNodeInfo
         */
        this.contentBefore = "";
        /**
         * 内容后插入
         *
         * @type {string}
         * @memberof KJobNodeInfo
         */
        this.contentAfter = "";
        /**
         * 扩展函数
         *
         * @type {KJobMethodInfo[]}
         * @memberof KJobNodeInfo
         */
        this.itemMethods = [];
    }
    return KJobNodeInfo;
}());
exports.KJobNodeInfo = KJobNodeInfo;
