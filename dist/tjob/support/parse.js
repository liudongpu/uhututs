"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("./../make/native");
var html_1 = require("./../parse/html");
var parse_1 = require("../../air/export/parse");
var index_1 = require("../../tnode/index");
var SupportParse = /** @class */ (function () {
    function SupportParse() {
    }
    SupportParse.contentParse = function (oLocalConfig, oInfo, sType) {
        var oOut = html_1.ParseHtml.parse(oInfo, new native_1.MakeNative());
        var sMacroFile = oOut.config.macroUrl;
        var sMacroContent = index_1.TNodeIoFile.readFile(sMacroFile);
        var sOutInfo = parse_1.EParseMustache.render(sMacroContent, { out: oOut });
        return sOutInfo;
    };
    return SupportParse;
}());
exports.SupportParse = SupportParse;
