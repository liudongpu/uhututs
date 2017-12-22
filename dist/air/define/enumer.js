"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 节点类型枚举
 *
 * @export
 * @enum {number}
 */
var AEnumNodeType;
(function (AEnumNodeType) {
    /**
     * 未定义类型
     */
    AEnumNodeType[AEnumNodeType["unknow"] = 0] = "unknow";
    /**
     * 忽略类型
     */
    AEnumNodeType[AEnumNodeType["ignore"] = 1] = "ignore";
    /**
     * 基本元素
     */
    AEnumNodeType[AEnumNodeType["element"] = 2] = "element";
    /**
     * 配置项
     */
    AEnumNodeType[AEnumNodeType["config"] = 3] = "config";
    /**
     * 模板
     */
    AEnumNodeType[AEnumNodeType["template"] = 4] = "template";
    /**
     * 脚本
     */
    AEnumNodeType[AEnumNodeType["script"] = 5] = "script";
})(AEnumNodeType = exports.AEnumNodeType || (exports.AEnumNodeType = {}));
