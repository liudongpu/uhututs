import { ADefineStart } from './../../air/define/start';
import {HelperString} from './../helper/string';
import {ADefineLang} from "../../air/define/lang";
import {EUtilLog} from '../../air/export/util';

export class SuperUtil {

    /**
     * 调试日志
     *
     * @static
     * @param {number} iCode
     * @param {string[]} [params]
     * @memberof SuperUtil
     */
    static logDebug(iCode : number, params?: string[]) {

        EUtilLog.debug(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static logWarn(iCode : number, params?: string[]) {

        EUtilLog.warn(HelperString.formatString(this.upLangInfo(iCode), params));

    }
    static logInfo(iCode : number, params?: string[]) {

        EUtilLog.info(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static logError(iCode : number, params?: string[]) {

        EUtilLog.error(HelperString.formatString(this.upLangInfo(iCode), params));

    }

    static defineBase() {
        return ADefineStart.upBase();
    }

    static defineProgram() {
        return ADefineStart.upProgram();
    }


    static defineData(){
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
    static upLangInfo(iCode : number) : string {return ADefineLang[iCode];}

}