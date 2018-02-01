"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weapp_1 = require("./../make/weapp");
var native_1 = require("./../make/native");
var html_1 = require("./../parse/html");
var parse_1 = require("../../air/export/parse");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tdaemon/index");
var SupportParse = /** @class */ (function () {
    function SupportParse() {
    }
    SupportParse.contentParse = function (oLocalConfig, oInfo, oParse) {
        var oParseMake = null;
        switch (oParse.type) {
            case index_2.TBase
                .defineBase()
                .workWeapp:
                oParseMake = new weapp_1.MakeWeapp();
                break;
            default:
                oParseMake = new native_1.MakeNative();
                break;
        }
        oParseMake.init(oParse);
        var oOut = html_1.ParseHtml.parse(oInfo, oParseMake);
        var sMacroFile = oOut.config.macroUrl;
        var sMacroContent = index_1.TNodeIoFile.readFile(sMacroFile);
        var sOutInfo = parse_1.EParseMustache.render(sMacroContent, { out: oOut });
        return sOutInfo;
    };
    return SupportParse;
}());
exports.SupportParse = SupportParse;
