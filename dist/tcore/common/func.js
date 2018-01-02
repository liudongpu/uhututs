"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonFunc = /** @class */ (function () {
    function CommonFunc() {
    }
    CommonFunc.jsonParse = function (sText) {
        return JSON.parse(sText);
    };
    CommonFunc.jsonStringify = function (oT) {
        return JSON.stringify(oT);
    };
    CommonFunc.jsonStringifyBeautify = function (oT) {
        return JSON.stringify(oT, null, 2);
    };
    return CommonFunc;
}());
exports.CommonFunc = CommonFunc;
