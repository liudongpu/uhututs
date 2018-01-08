"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start_1 = require("./../../air/define/start");
var lang_1 = require("../../air/define/lang");
var util_1 = require("../../air/export/util");
var index_1 = require("../../tcore/index");
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
        util_1.EUtilLog.debug(index_1.TCoreHelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logWarn = function (iCode, params) {
        util_1.EUtilLog.warn(index_1.TCoreHelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logInfo = function (iCode, params) {
        util_1.EUtilLog.info(index_1.TCoreHelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.logError = function (iCode, params) {
        util_1.EUtilLog.error(index_1.TCoreHelperString.formatString(this.upLangInfo(iCode), params));
    };
    SuperUtil.defineBase = function () {
        return start_1.ADefineStart.upBase();
    };
    SuperUtil.defineProgram = function () {
        return start_1.ADefineStart.upProgram();
    };
    SuperUtil.defineData = function () {
        return start_1.ADefineStart.upData();
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
