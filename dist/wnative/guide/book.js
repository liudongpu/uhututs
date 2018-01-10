"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var index_1 = require("../../tcore/index");
var react_navigation_1 = require("react-navigation");
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.navigateUrl = function (that, sPageUrl) {
        var oPageNavTemp = null;
        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;
        }
        else if (that && that.navigate) {
            oPageNavTemp = that;
        }
        if (oPageNavTemp) {
            var urlInfo = index_1.TCoreHelperUrl.parseUrl(sPageUrl);
            if (urlInfo.baseJump === "reset") {
                var resetAction = react_navigation_1.NavigationActions.reset({
                    index: 0,
                    actions: [
                        react_navigation_1.NavigationActions.navigate({ routeName: urlInfo.pageName, params: { url: sPageUrl } })
                    ]
                });
                oPageNavTemp.dispatch(resetAction);
            }
            else if (urlInfo.baseJump === "replace") {
                var aAction = {
                    type: 'CustomNav/replace',
                    routeName: urlInfo.pageName,
                    params: { url: sPageUrl }
                };
                oPageNavTemp.dispatch(aAction);
            }
            else if (urlInfo.baseJump == "back") {
                oPageNavTemp.goBack();
            }
            else {
                //if (sTemplateUrl !== sPageUrl) {
                oPageNavTemp.navigate(urlInfo.pageName, { url: sPageUrl });
                //}
            }
        }
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
        return that.state[sKey];
    };
    Book.prototype.stateInObject = function (that, oObject) {
        that.setState(oObject);
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
        for (var p in that.state) {
            if (p.startsWith(sFormStart)) {
                oValue[p.substr(sFormStart.length)] = that.state[p];
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
        return react_native_1.AsyncStorage.getItem(sKey);
    };
    Book.prototype.storeSetItem = function (sKey, sValue) {
        return react_native_1.AsyncStorage.setItem(sKey, sValue);
    };
    Book.prototype.storeRemoveItem = function (sKey) {
        return react_native_1.AsyncStorage.removeItem(sKey);
    };
    Book.prototype.fetchPost = function (sUrl, oJsonInput) {
        return fetch(sUrl, {
            method: 'POST',
            body: index_1.TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then(function (response) { if (response.ok) {
            return response.json();
        }
        else {
            console.error(response);
        } });
    };
    Book.prototype.checkFlagProduct = function () {
        var bReturn = true;
        if (__DEV__ != undefined && __DEV__ === true) {
            console.log(__DEV__);
            bReturn = false;
        }
        return bReturn;
    };
    Book.prototype.componentMessageAlert = function (sTitle, sMessage) {
        react_native_1.Alert.alert(sTitle, sMessage);
    };
    return Book;
}());
var GuideBook = new Book();
exports.GuideBook = GuideBook;
