import {HelperString} from './../helper/string';
import {AdefineLang} from "../../air/define/lang";
import {EutilLog} from '../../air/export/util';
import {AdefineStart} from '../../air/define/start';

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

    static logWarn(iCode : number, params?: string[]) {

        EutilLog.warn(HelperString.formatString(this.upLangInfo(iCode), params));

    }
    static logInfo(iCode : number, params?: string[]) {

        EutilLog.info(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static logError(iCode : number, params?: string[]) {

        EutilLog.error(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static defineBase() {
        return AdefineStart.upBase();
    }

    static defineProgram() {
        return AdefineStart.upProgram();
    }

    /**
     * 获取文本信息根据编号
     *
     * @static
     * @param {number} iCode
     * @returns {string}
     * @memberof TopUtil
     */
    static upLangInfo(iCode : number) : string {return AdefineLang[iCode];}

}