"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.navigateUrl = function (that, sPageUrl) {
        wx.navigateTo({ url: sPageUrl });
    };
    Book.prototype.urlCurrentInfo = function (that) {
        var sPageUrl = that.props.navigation.state.params.url;
        var oUrlInfo = index_1.TCoreHelperUrl.parseUrl(sPageUrl);
        return oUrlInfo;
    };
    Book.prototype.stateInValue = function (that, sKey, sVal) {
        var oObject = {};
        oObject[sKey] = sVal;
        this.stateInObject(that, oObject);
    };
    Book.prototype.stateUpValue = function (that, sKey) {
        return that.data[sKey];
    };
    Book.prototype.stateInObject = function (that, oObject) {
        that.setData(oObject);
    };
    Book.prototype.stateInForm = function (that, sStart, oObject) {
        var oState = {};
        for (var p in oObject) {
            oState['form_' + sStart + '_' + p] = oObject[p];
        }
        this.stateInObject(that, oState);
    };
    Book.prototype.stateUpForm = function (that, sStart) {
        var oValue = {};
        var sFormStart = 'form_' + sStart + '_';
        for (var p in that.data) {
            if (p.startsWith(sFormStart)) {
                oValue[p.substr(sFormStart.length)] = that.data[p];
            }
        }
        return oValue;
    };
    Book.prototype.storeGetObject = function (sKey) {
        return this
            .storeGetItem(sKey)
            .then(function (value) {
            if (value) {
                return index_1.TCoreCommonFunc.jsonParse(value);
            }
            else {
                return null;
            }
        });
    };
    Book.prototype.storeSetObject = function (sKey, tValue) {
        return this.storeSetItem(sKey, index_1.TCoreCommonFunc.jsonStringify(tValue));
    };
    Book.prototype.storeGetItem = function (sKey) {
        return new Promise(function (resolve) {
            wx.getStorage({
                key: sKey,
                success: function (res) {
                    resolve(res.data);
                }
            });
        });
    };
    Book.prototype.storeSetItem = function (sKey, sValue) {
        return new Promise(function (resolve) {
            wx.setStorageSync(sKey, sValue);
            resolve();
        });
    };
    Book.prototype.storeRemoveItem = function (sKey) {
        return new Promise(function (resolve) {
            wx.removeStorage({
                key: sKey,
                success: function (res) {
                    resolve(res.data);
                }
            });
        });
    };
    Book.prototype.fetchPost = function (sUrl, oJsonInput) {
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
        return new Promise(function (resolve) {
            wx.request({
                url: sUrl,
                data: index_1.TCoreCommonFunc.jsonStringify(oJsonInput),
                method: "POST",
                success: function (res) {
                    resolve(res.data);
                }
            });
        });
    };
    Book.prototype.checkFlagProduct = function () {
        var bReturn = true;
        return bReturn;
    };
    Book.prototype.componentMessageAlert = function (sTitle, sMessage) {
        wx.showModal({ title: sTitle, content: sMessage, showCancel: false });
    };
    Book.prototype.componentMessageConfirm = function (sTitle, sMessage, fCall) {
        wx.showModal({ title: sTitle, content: sMessage, success: function (res) {
                if (res.confirm) {
                    fCall();
                }
                else if (res.cancel) {
                    console.log('用户点击取消');
                }
            } });
    };
    Book.prototype.componentToast = function (sInfo, iSecond, sType) {
        if (iSecond === undefined) {
            iSecond = 3000;
        }
        else {
            iSecond = iSecond * 1000;
        }
        switch (sType) {
            case "fail":
                wx.showToast({ title: sInfo, duration: iSecond });
                break;
            default:
                wx.showToast({ title: sInfo, duration: iSecond });
                break;
        }
    };
    Book.prototype.componentActionSheet = function (oSet) {
    };
    Book.prototype.systemInfo = function () {
        return { version: '' };
    };
    return Book;
}());
var GuideBook = new Book();
exports.GuideBook = GuideBook;
