"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tdaemon/index");
var index_2 = require("../../tnode/index");
var EasyFileReplaceContent = /** @class */ (function () {
    function EasyFileReplaceContent() {
        this.sourceContent = '';
        this.targetContent = '';
        /**
         * 替换结果
         *
         * @type {string}
         * @memberof EasyFileReplaceContent
         */
        this.execContent = '';
        this.sourceNotFound = [];
        this.targetNotFounc = [];
    }
    return EasyFileReplaceContent;
}());
var EasyFile = /** @class */ (function () {
    function EasyFile() {
    }
    EasyFile.copyFileAndReplace = function (sSourceFile, sTargetFile) {
        if (!index_2.TNodeIoFile.flagExist(sTargetFile)) {
            index_2.TNodeIoFile.copyFile(sSourceFile, sTargetFile);
        }
        else {
            var sSourceContent = index_2.TNodeIoFile.readFile(sSourceFile);
            var sTargetContent = index_2.TNodeIoFile.readFile(sTargetFile);
            var oContentInfo = this.replaceContent(sSourceContent, sTargetContent);
            if (oContentInfo.sourceNotFound.length > 0) {
                index_1.TBase.logWarn(3711002, [
                    sSourceFile,
                    oContentInfo
                        .sourceNotFound
                        .join(',')
                ]);
            }
            if (oContentInfo.targetNotFounc.length > 0) {
                index_1.TBase.logWarn(3711003, [
                    sSourceFile,
                    oContentInfo
                        .targetNotFounc
                        .join(',')
                ]);
            }
            if (sTargetContent != oContentInfo.execContent) {
                index_2.TNodeIoFile.writeFile(sTargetFile, oContentInfo.execContent);
            }
        }
    };
    EasyFile.copyDirAndReplace = function (sSourceDir, sTargetDir, sReplaceFileExt, sSkipDir) {
        var _this = this;
        var aFiles = index_2.TNodeIoFile.listDir(sSourceDir);
        var aSkip = sSkipDir.split(',');
        aFiles.forEach(function (fItem) {
            var sSubPath = fItem.substr(sSourceDir.length);
            var bFlagSkip = false;
            aSkip.forEach(function (fItem) {
                if (sSubPath.startsWith(fItem)) {
                    bFlagSkip = true;
                }
            });
            if (!bFlagSkip) {
                var sExtName = index_2.TNodeIoFile.upExtName(sSubPath);
                var sTargetFile = index_2.TNodeIoFile.pathJoin(sTargetDir, sSubPath);
                if (sReplaceFileExt.indexOf(sExtName) > -1) {
                    _this.copyFileAndReplace(fItem, sTargetFile);
                }
                else {
                    index_2.TNodeIoFile.copyFileAsync(fItem, sTargetFile);
                }
            }
        });
    };
    EasyFile.replaceContent = function (sSourceContent, sTargetContent) {
        var oEasyFileContent = new EasyFileReplaceContent();
        var sStart = index_1.TBase
            .defineBase()
            .replaceSignBegin;
        var sEnd = index_1.TBase
            .defineBase()
            .replaceSignEnd;
        var sReturn = sSourceContent;
        var sCheckTarget = sTargetContent;
        var sRegexLeft = "([\r\n])(\s*)(.*)(";
        var sRegexRight = ")(\\w+)(\s|.)*([\r\n])";
        var sRegexInfo = "(.|\s|\S|\r|\n)*?";
        var sRegex = sRegexLeft + sStart + sRegexRight;
        var oRegexBegin = new RegExp(sRegex, "g");
        var oMapReplace = new Map();
        var oSourceMatch = sSourceContent.match(oRegexBegin);
        if (oSourceMatch != null) {
            oSourceMatch.forEach(function (fItem) {
                var oRegexItem = new RegExp(sRegex);
                var oResult = oRegexItem.exec(fItem);
                var sName = oResult[5];
                var sRegexContent = sStart + sName + sRegexInfo + sEnd + sName;
                var oRegexContent = new RegExp(sRegexContent, "g");
                var oContentInfo = oRegexContent.exec(sTargetContent);
                if (oContentInfo != null && oContentInfo.length > 0) {
                    oMapReplace.set(sName, oContentInfo[0]);
                    sCheckTarget = sCheckTarget.replace(oContentInfo[0], '');
                }
                else {
                    oEasyFileContent
                        .sourceNotFound
                        .push(sStart + sName);
                }
            });
        }
        oMapReplace.forEach(function (fVal, fKey) {
            sReturn = sReturn.replace(new RegExp(sStart + fKey + sRegexInfo + sEnd + fKey, "g"), fVal);
        });
        oEasyFileContent.targetContent = sCheckTarget;
        oEasyFileContent.execContent = sReturn;
        var oCheckMatch = sCheckTarget.match(new RegExp(sStart + ".*", "g"));
        if (oCheckMatch != null) {
            oCheckMatch.forEach(function (fItem) {
                oEasyFileContent
                    .targetNotFounc
                    .push(fItem);
            });
        }
        return oEasyFileContent;
    };
    return EasyFile;
}());
exports.EasyFile = EasyFile;
