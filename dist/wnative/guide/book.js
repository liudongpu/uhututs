"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var index_1 = require("../../tcore/index");
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.navigateUrl = function (that, sUrl) {
        var oPageNavTemp = null;
        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;
        }
        else if (that && that.navigate) {
            oPageNavTemp = that;
        }
        if (oPageNavTemp) {
            oPageNavTemp.navigate(sUrl);
        }
    };
    Book.prototype.stateUpValue = function (that, sKey) {
        return that.state[sKey];
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
            return index_1.TCoreCommonFunc.jsonParse(value);
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
    Book.prototype.fetchPost = function (sUrl, oJsonInput) {
        return fetch(sUrl, {
            method: 'POST',
            body: index_1.TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then(function (response) { return response.json(); });
    };
    Book.prototype.checkFlagProduct = function () {
        var bReturn = true;
        if (__DEV__ != undefined && __DEV__ === true) {
            console.log(__DEV__);
            bReturn = false;
        }
        return bReturn;
    };
    return Book;
}());
var GuideBook = new Book();
exports.GuideBook = GuideBook;
