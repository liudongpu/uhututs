import {HelperString} from './../helper/string';
import {BaseStartLang} from "../../base/index";
import {EutilLog} from '../../air/export/util';

export class TopUtil {

    /**
     * 调试日志
     *
     * @static
     * @param {number} iCode
     * @param {string[]} [params]
     * @memberof TopUtil
     */
    static logDebug(iCode : number, params?: string[]) {

        EutilLog.debug(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static logInfo(iCode : number, params?: string[]) {

        EutilLog.info(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static logError(iCode : number, params?: string[]) {

        EutilLog.error(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof TopUtil
     */
    static upLangInfo(iCode : number) : string {return BaseStartLang[iCode];}

}