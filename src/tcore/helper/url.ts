import { IbaseKv } from "../../air/interfaces/base";

class CurlInfo {

    pageName: string = ''

    pageUrl: string = ''

    /**
     * 字段编号
     * 
     * @type {string}
     * @memberOf CurlInfo
     */
    baseKey: string

    /**
     * 操作类型
     * 
     * @type {string}
     * @memberOf CurlInfo
     */
    baseType: string
    /**
     * 跳转类型 取值push reset
     * 
     * @type {string}
     * @memberOf CurlInfo
     */
    baseJump: string
    /**
     * 基础父数据编号
     * 
     * @type {string}
     * @memberof CurlInfo
     */
    baseLeader: string
    /**
     * 展示类型标记 该标记优先级高于baseType的定义
     * 
     * @type {string}
     * @memberof CurlInfo
     */
    baseShow: string


    /**
     * 操作父页面的编号
     * 
     * @type {string}
     * @memberOf CurlInfo
     */
    baseField: string

    formParam: IbaseKv = {}

    stateParam: IbaseKv = {}

    parentParam: IbaseKv = {}

    otherParam: IbaseKv = {}

    paramSource: IbaseKv = {}

}

export class HelperUrl {
   


    static parseUrl(sPageUrl:string):CurlInfo{
        let urlInfo = new CurlInfo();
        urlInfo.pageUrl = sPageUrl;
        if (sPageUrl != undefined && sPageUrl.indexOf('?') > -1) {
            urlInfo.pageName = sPageUrl.split('?')[0];
            let sParm = sPageUrl.substr(urlInfo.pageName.length + 1);
            sParm.split('&').forEach((fItem) => {
                if (fItem) {
                    let sKey = fItem.split('=')[0];
                    let sValue = fItem.substr(sKey.length + 1);
                    if (sKey && sValue) {
                        let sStart = sKey.split('_')[0];
                        let sEnd = sKey.substr(sStart.length + 1);
                        if (sStart&& sEnd) {
                            if (sStart === "base") {
                                switch (sEnd) {
                                    case "key":
                                        urlInfo.baseKey = sValue;
                                        break;
                                    case "type":
                                        urlInfo.baseType = sValue;
                                        break;
                                    case "jump":
                                        urlInfo.baseJump = sValue;
                                        break;
                                    case "field":
                                        urlInfo.baseField = sValue;
                                        break;
                                    case "show":
                                        urlInfo.baseShow = sValue;
                                        break;
                                    case "leader":
                                        urlInfo.baseLeader = sValue;
                                        break;
                                    default:
                                        urlInfo.otherParam[sKey] = sValue;
                                        break;
                                }
                            }
                            else if (sStart === "form") {
                                urlInfo.formParam[sEnd] = sValue;
                            }
                            else if (sStart === "state") {
                                urlInfo.stateParam[sEnd] = sValue;
                            }
                            else if (sStart === "parent") {
                                urlInfo.parentParam[sEnd] = sValue;
                            }
                            else {
                                urlInfo.otherParam[sKey] = sValue;
                            }
                        }
                        else {
                            urlInfo.otherParam[sKey] = sValue;
                        }
                        urlInfo.paramSource[sKey] = sValue;
                    }
                }
            });
        }
        else {
            urlInfo.pageName = sPageUrl;
        }
        return urlInfo;
    }


}

