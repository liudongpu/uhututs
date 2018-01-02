import { ADefineStart } from './../../air/define/start';
import { HelperString } from './../helper/string';
import { ADefineLang } from "../../air/define/lang";
import { EUtilLog } from '../../air/export/util';
export class SuperUtil {
    /**
     * 调试日志
     *
     * @static
     * @param {number} iCode
     * @param {string[]} [params]
     * @memberof SuperUtil
     */
    static logDebug(iCode, params) {
        EUtilLog.debug(HelperString.formatString(this.upLangInfo(iCode), params));
    }
    static logWarn(iCode, params) {
        EUtilLog.warn(HelperString.formatString(this.upLangInfo(iCode), params));
    }
    static logInfo(iCode, params) {
        EUtilLog.info(HelperString.formatString(this.upLangInfo(iCode), params));
    }
    static logError(iCode, params) {
        EUtilLog.error(HelperString.formatString(this.upLangInfo(iCode), params));
    }
    static defineBase() {
        return ADefineStart.upBase();
    }
    static defineProgram() {
        return ADefineStart.upProgram();
    }
    static defineData() {
        return ADefineStart.upData();
    }
    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof SuperUtil
     */
    static upLangInfo(iCode) { return ADefineLang[iCode]; }
}
