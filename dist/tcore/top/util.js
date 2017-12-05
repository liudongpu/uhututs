"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = require("./../helper/string");
var index_1 = require("../../base/index");
var util_1 = require("../../air/export/util");
var TopUtil = (function () {
    function TopUtil() {
    }
    /**
     * 调试日志
     *
     * @static
     * @param {number} iCode
     * @param {string[]} [params]
     * @memberof TopUtil
     */
    TopUtil.logDebug = function (iCode, params) {
        util_1.EutilLog.debug(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    TopUtil.logInfo = function (iCode, params) {
        util_1.EutilLog.info(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    TopUtil.logError = function (iCode, params) {
        util_1.EutilLog.error(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof TopUtil
     */
    TopUtil.upLangInfo = function (iCode) { return index_1.BaseStartLang[iCode]; };
    return TopUtil;
}());
exports.TopUtil = TopUtil;
