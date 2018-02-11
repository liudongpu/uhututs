import {IGuideBook, IGuideActionSheet, IGuideSystemInfo} from "../../air/interfaces/guide";

import {TCoreCommonFunc, TCoreHelperUrl} from "../../tcore/index";


declare var wx;

class Book implements IGuideBook{

    navigateUrl(that, sPageUrl : string) {

        wx.navigateTo({url: sPageUrl});

    }

    urlCurrentInfo(that) {
        let sPageUrl = that.props.navigation.state.params.url;

        let oUrlInfo = TCoreHelperUrl.parseUrl(sPageUrl);

        return oUrlInfo;

    }

    stateInValue(that, sKey : string, sVal : string) {

        let oObject = {};
        oObject[sKey] = sVal;

        this.stateInObject(that, oObject);

    }

    stateUpValue(that, sKey : string) {

        return that.data[sKey];

    }

    stateInObject(that, oObject) {
        that.setData(oObject);
    }

    stateInForm(that, sStart : string, oObject : any) {

        let oState = {};

        for (var p in oObject) {
            oState['form_' + sStart + '_' + p] = oObject[p];
        }

        this.stateInObject(that, oState);

    }

    stateUpForm(that, sStart : string) {
        let oValue = {};

        let sFormStart = 'form_' + sStart + '_';
        for (var p in that.data) {
            if (p.startsWith(sFormStart)) {

                oValue[p.substr(sFormStart.length)] = that.data[p];
            }
        }
        return oValue;

    }

    storeGetObject < T > (sKey : string) : Promise < T > {

        return this
            .storeGetItem(sKey)
            .then((value) => {
                if (value) {
                    return TCoreCommonFunc.jsonParse < T > (value);
                } else {
                    return null;
                }

            });
    }

    storeSetObject < T > (sKey : string, tValue : T) : Promise < void > {

        return this.storeSetItem(sKey, TCoreCommonFunc.jsonStringify(tValue));
    }

    storeGetItem(sKey : string) : Promise < string > {

        return new Promise(resolve => {

            wx.getStorage({
                key: sKey,
                success: (res) => {
                    resolve(res.data);
                }
            })
        });
    }

    storeSetItem(sKey : string, sValue : string) : Promise < void > {

        


        return new Promise(resolve => {

            wx.setStorageSync( sKey,sValue);
            resolve();
        });

    }

    storeRemoveItem(sKey : string) : Promise < void > {
        return new Promise(resolve => {

            wx.removeStorage({
                key: sKey,
                success: (res) => {
                    resolve(res.data);
                }
            })
        });
    }

    fetchPost(sUrl : string, oJsonInput : any) : Promise < any > {

        /*
        return fetch(sUrl, {
            method: 'POST',
            body: TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error(response)
            }
        })
        */

        return new Promise((resolve)=>{

            wx.request({
                url: sUrl, //仅为示例，并非真实的接口地址
                data: TCoreCommonFunc.jsonStringify(oJsonInput),
                method:"POST",
                
                success: function(res) {
                  resolve( res.data);
                }
              })
        })


    }

    checkFlagProduct() : boolean {
        let bReturn = true;
        
        return bReturn;
    }

    componentMessageAlert(sTitle : string, sMessage : string) {

       

        wx.showModal({title:sTitle,content:sMessage,showCancel:false});

    }

    componentMessageConfirm(sTitle : string, sMessage : string, fCall : Function) {

       

        wx.showModal({title:sTitle,content:sMessage,success: function(res) {
            if (res.confirm) {
                fCall();
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }});
    }

    componentToast(sInfo : string, iSecond : number, sType : string) {

        if (iSecond === undefined) {
            iSecond = 3000;
        }
        else{
            iSecond=iSecond*1000;
        }

        switch (sType) {
            case "fail":
                wx.showToast({title:sInfo,duration: iSecond});
                break;
            default:
            wx.showToast({title:sInfo,duration: iSecond});
                break;
        }

    }


    componentActionSheet(oSet:IGuideActionSheet){

    }

    systemInfo() : IGuideSystemInfo{
        return {version:''}
    }

}

const GuideBook = new Book();

export {GuideBook};