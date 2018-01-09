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
    AEnumNodeType[AEnumNodeType["init"] = 2] = "init";
    /**
     * 基本元素
     */
    AEnumNodeType[AEnumNodeType["element"] = 3] = "element";
    AEnumNodeType[AEnumNodeType["form"] = 4] = "form";
    AEnumNodeType[AEnumNodeType["import"] = 5] = "import";
    /**
     * 配置项
     */
    AEnumNodeType[AEnumNodeType["config"] = 6] = "config";
    /**
     * 状态数据
     */
    AEnumNodeType[AEnumNodeType["state"] = 7] = "state";
    /**
     * 模板
     */
    AEnumNodeType[AEnumNodeType["template"] = 8] = "template";
    /**
     * 脚本
     */
    AEnumNodeType[AEnumNodeType["script"] = 9] = "script";
})(AEnumNodeType = exports.AEnumNodeType || (exports.AEnumNodeType = {}));
var AEnumRegexKey;
(function (AEnumRegexKey) {
    AEnumRegexKey[AEnumRegexKey["state"] = 0] = "state";
    AEnumRegexKey[AEnumRegexKey["item"] = 1] = "item";
    AEnumRegexKey[AEnumRegexKey["env"] = 2] = "env";
    AEnumRegexKey[AEnumRegexKey["this"] = 3] = "this";
    AEnumRegexKey[AEnumRegexKey["tag"] = 4] = "tag";
    AEnumRegexKey[AEnumRegexKey["unknow"] = 5] = "unknow";
})(AEnumRegexKey = exports.AEnumRegexKey || (exports.AEnumRegexKey = {}));
