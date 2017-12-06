"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
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
        if (!index_2.TnodeIoFile.flagExist(sTargetFile)) {
            index_2.TnodeIoFile.copyFile(sSourceFile, sTargetFile);
        }
        else {
            var sSourceContent = index_2.TnodeIoFile.readFile(sSourceFile);
            var sTargetContent = index_2.TnodeIoFile.readFile(sTargetFile);
            var oContentInfo = this.replaceContent(sSourceContent, sTargetContent);
            if (oContentInfo.sourceNotFound.length > 0) {
                index_1.Tbase.logWarn(3711002, [sSourceFile, oContentInfo.sourceNotFound.join(',')]);
            }
            if (oContentInfo.targetNotFounc.length > 0) {
                index_1.Tbase.logWarn(3711003, [sSourceFile, oContentInfo.targetNotFounc.join(',')]);
            }
            index_2.TnodeIoFile.writeFile(sTargetFile, oContentInfo.execContent);
        }
    };
    EasyFile.copyDirAndReplace = function (sSourceDir, sTargetDir, sReplaceFileExt) {
        var _this = this;
        var aFiles = index_2.TnodeIoFile.listDir(sSourceDir);
        aFiles.forEach(function (fItem) {
            var sNewPath = fItem.substr(sSourceDir.length);
            var sExtName = index_2.TnodeIoFile.upExtName(sNewPath);
            var sTargetFile = index_2.TnodeIoFile.pathJoin(sTargetDir, sNewPath);
            if (sReplaceFileExt.indexOf(sExtName) > -1) {
                _this.copyFileAndReplace(fItem, sTargetFile);
            }
            else {
                index_2.TnodeIoFile.copyFileAsync(fItem, sTargetFile);
            }
        });
    };
    EasyFile.replaceContent = function (sSourceContent, sTargetContent) {
        var oEasyFileContent = new EasyFileReplaceContent();
        var sStart = index_1.Tbase
            .defineBase()
            .replaceContentBegin;
        var sEnd = index_1.Tbase
            .defineBase()
            .replaceContentEnd;
        var sReturn = sSourceContent;
        var sRegexLeft = "([\r\n])(\s*)(.*)(";
        var sRegexRight = ")(\\w+)(\s*)([\r\n])";
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
                    sTargetContent = sTargetContent.replace(oContentInfo[0], '');
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
        oEasyFileContent.targetContent = sTargetContent;
        oEasyFileContent.execContent = sReturn;
        var oCheckMatch = sTargetContent.match(new RegExp(sStart + ".*", "g"));
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
