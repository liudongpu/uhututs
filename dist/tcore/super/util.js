"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = require("./../helper/string");
var lang_1 = require("../../air/define/lang");
var util_1 = require("../../air/export/util");
var start_1 = require("../../air/define/start");
var SuperUtil = /** @class */ (function () {
    function SuperUtil() {
    }
    /**
     * 调试日志
     *
     * @static
     * @param {number} iCode
     * @param {string[]} [params]
     * @memberof SuperUtil
     */
    SuperUtil.logDebug = function (iCode, params) {
        util_1.EUtilLog.debug(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logWarn = function (iCode, params) {
        util_1.EUtilLog.warn(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logInfo = function (iCode, params) {
        util_1.EUtilLog.info(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logError = function (iCode, params) {
        util_1.EUtilLog.error(string_1.HelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.defineBase = function () {
        return start_1.ADefineStart.upBase();
    };
    SuperUtil.defineProgram = function () {
        return start_1.ADefineStart.upProgram();
    };
    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof SuperUtil
     */
    SuperUtil.upLangInfo = function (iCode) { return lang_1.ADefineLang[iCode]; };
    return SuperUtil;
}());
exports.SuperUtil = SuperUtil;
