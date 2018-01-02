"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var index_1 = require("../../tcore/index");
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.navigateUrl = function (that, sUrl) {
        that
            .props
            .navigation
            .navigate(sUrl);
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
    return Book;
}());
var GuideBook = new Book();
exports.GuideBook = GuideBook;
