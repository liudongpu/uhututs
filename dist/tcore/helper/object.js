"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelperObject = (function () {
    function HelperObject() {
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
    HelperObject.assign = function (target, source) {
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
    HelperObject.parseTs = function (source) {
        return source;
    };
    return HelperObject;
}());
exports.HelperObject = HelperObject;
