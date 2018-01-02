import { AEnumNodeType } from "../define/enumer";
export class KJobFileInfo {
}
/**
 * 页面输出
 *
 * @export
 * @class KJobPageOut
 */
export class KJobPageOut {
    constructor() {
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
}
export class KJobTemplateInfo {
    constructor() {
        this.name = "";
        this.content = "";
    }
}
export class KJobCurrentParse {
    constructor() {
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
}
/**
 * 元素的基本信息
 *
 * @export
 * @class KJobNodeInfo
 */
export class KJobNodeInfo {
    constructor() {
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
        this.nodeType = AEnumNodeType.unknow;
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
}
