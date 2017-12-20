"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 节点类型枚举
 *
 * @export
 * @enum {number}
 */
var AenumNodeType;
(function (AenumNodeType) {
    /**
     * 未定义类型
     */
    AenumNodeType[AenumNodeType["unknow"] = 0] = "unknow";
    /**
     * 忽略类型
     */
    AenumNodeType[AenumNodeType["ignore"] = 1] = "ignore";
    /**
     * 基本元素
     */
    AenumNodeType[AenumNodeType["element"] = 2] = "element";
    /**
     * 模板
     */
    AenumNodeType[AenumNodeType["template"] = 3] = "template";
    /**
     * 脚本
     */
    AenumNodeType[AenumNodeType["script"] = 4] = "script";
})(AenumNodeType = exports.AenumNodeType || (exports.AenumNodeType = {}));
