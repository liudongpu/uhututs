"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = (function () {
    function default_1() {
    }
    /**
     * 浅层克隆
     *
     * @static
     * @template T
     * @template U
     * @param {T} target
     * @param {U} source
     * @returns
     */
    default_1.assign = function (target, source) {
        return Object.assign(target, source);
    };
    /**
     * 转换操作  该操作无实际意义  仅仅用于定义的转换
     *
     * @static
     * @template T
     * @param {*} source
     * @returns
     */
    default_1.parseTs = function (source) {
        return source;
    };
    return default_1;
}());
exports.default = default_1;
