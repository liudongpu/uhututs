"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_1 = require("../io/file");
var WayExec = /** @class */ (function () {
    function WayExec() {
    }
    WayExec.bashExec = function () {
        var _this = this;
        var aArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            aArgs[_i] = arguments[_i];
        }
        aArgs.forEach(function (fItem) {
            switch (fItem.name) {
                case "execReplaceFileContentLine":
                    _this.execReplaceFileContentLine(fItem);
                    break;
            }
        });
    };
    /**
     * 替换文件内容
     *
     * @private
     * @static
     * @param {IArgsExec} oArg
     * @memberof WayExec
     */
    WayExec.execReplaceFileContentLine = function (oArg) {
        var sInfo = "";
        var sReturn = "";
        if (oArg.filePath) {
            sInfo = file_1.IoFile.readFile(oArg.filePath);
        }
        else {
            sInfo = oArg.textInfo;
        }
        var sRegex = "([\r\n]\s*.*" + oArg.textBegin + "\s*[\r\n])(.|\s|\S|\n)*([\r\n]\s*.*" + oArg.textEnd + "\s*[\r\n])";
        var oRegexItem = new RegExp(sRegex, "g");
        var oResult = oRegexItem.exec(sInfo);
        if (oResult) {
            sReturn = sInfo.replace(oResult[0], oResult[1] + oArg.textReplace + oResult[3]);
        }
        if (oArg.filePath) {
            file_1.IoFile.writeFile(oArg.filePath, sReturn);
        }
        return sReturn;
    };
    return WayExec;
}());
exports.WayExec = WayExec;
