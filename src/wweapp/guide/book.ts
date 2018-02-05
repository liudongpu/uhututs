import {IGuideBook} from "../../air/interfaces/guide";

import {TCoreCommonFunc, TCoreHelperUrl} from "../../tcore/index";

class Book {

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

        return that.state[sKey];

    }

    stateInObject(that, oObject) {
        that.setState(oObject);
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
        for (var p in that.state) {
            if (p.startsWith(sFormStart)) {

                oValue[p.substr(sFormStart.length)] = that.state[p];
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
    }

    checkFlagProduct() : boolean {
        let bReturn = true;
        if (__DEV__ != undefined && __DEV__ === true) {
            console.log(__DEV__);
            bReturn = false;
        }
        return bReturn;
    }

    componentMessageAlert(sTitle : string, sMessage : string) {

       

        wx.showModal({title:sTitle,content:sMessage});

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
            iSecond = 3;
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

}

const GuideBook = new Book();

export {GuideBook};