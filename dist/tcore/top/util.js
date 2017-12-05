"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = require("./../helper/string");
var lang_1 = require("../../air/define/lang");
var util_1 = require("../../air/export/util");
var start_1 = require("../../air/define/start");
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
    TopUtil.defineBase = function () {
        return start_1.AdefineStart.upBase();
    };
    TopUtil.defineProgram = function () {
        return start_1.AdefineStart.upProgram();
    };
    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof TopUtil
     */
    TopUtil.upLangInfo = function (iCode) { return lang_1.AdefineLang[iCode]; };
    return TopUtil;
}());
exports.TopUtil = TopUtil;
