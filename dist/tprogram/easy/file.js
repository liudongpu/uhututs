"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
var EasyFile = /** @class */ (function () {
    function EasyFile() {
    }
    EasyFile.copyFileAndReplace = function (sSourceFile, sTargetFile) {
        if (!index_2.TnodeIoFile.flagExist(sTargetFile)) {
            index_2.TnodeIoFile.copyFile(sSourceFile, sTargetFile);
        }
        else {
            var sSourceContent = index_2.TnodeIoFile.readFile(sSourceFile);
            var sTargetContent = index_2.TnodeIoFile.readFile(sTargetFile);
            var sNewContent = this.replaceContent(sSourceContent, sTargetContent);
            index_2.TnodeIoFile.writeFile(sTargetFile, sTargetContent);
        }
    };
    EasyFile.replaceContent = function (sSourceContent, sTargetContent) {
        var sStart = index_1.Tbase
            .defineBase()
            .replaceContentBegin;
        var sEnd = index_1.Tbase
            .defineBase()
            .replaceContentEnd;
        var sReturn = sSourceContent;
        var sRegexLeft = "([\r\n])(\s*)(.*)(";
        var sRegexRight = ")(\\w+)(\s*)([\r\n])";
        var sRegex = sRegexLeft + sStart + sRegexRight;
        var oRegexBegin = new RegExp(sRegex, "gm");
        sSourceContent
            .match(oRegexBegin)
            .forEach(function (fItem) {
            var oRegexItem = new RegExp(sRegex);
            var oResult = oRegexItem.exec(fItem);
            var sName = oResult[5];
            var sRegexContent = sStart + sName + "(.|\s|\S|\r|\n)*?" + sEnd + sName;
            var oRegexContent = new RegExp(sRegexContent, "g");
            var oContentInfo = oRegexContent.exec(sTargetContent);
            if (oContentInfo != null && oContentInfo.length > 0) {
                sReturn = sReturn.replace(new RegExp(sRegexContent, "g"), oContentInfo[0]);
            }
            else {
                index_1.Tbase.logWarn(3711002, [sStart + sName]);
            }
        });
        return sReturn;
    };
    return EasyFile;
}());
exports.EasyFile = EasyFile;
