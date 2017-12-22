"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./../make/native");
var html_1 = require("./../parse/html");
var SupportParse = /** @class */ (function () {
    function SupportParse() {
    }
    SupportParse.contentParse = function (oLocalConfig, oInfo, sType) {
        var oOut = html_1.ParseHtml.parse(oInfo, new native_1.MakeNative());
        return oOut.content;
    };
    return SupportParse;
}());
exports.SupportParse = SupportParse;
