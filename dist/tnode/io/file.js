"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../../tcore/index");
var fs = require("fs");
var path = require("path");
var IoFile = /** @class */ (function () {
    function IoFile() {
    }
    IoFile.chmodSync = function (sPath, iMode) {
        if (iMode == undefined) {
            iMode = 774;
        }
        fs.chmodSync(sPath, iMode);
    };
    IoFile.upFilePath = function (sPath) {
        return this.pathNormalize(sPath);
    };
    IoFile.upBaseName = function (sFile, sExt) {
        if (sExt == undefined) {
            sExt = this.upExtName(sFile);
        }
        return path.basename(sFile, sExt);
    };
    IoFile.upExtName = function (sFile) {
        return path.extname(sFile);
    };
    /**
     * 是否存在路径
     *
     * @static
     * @param {string} sPath
     * @returns {boolean}
     * @memberof IoFile
     */
    IoFile.flagExist = function (sPath) {
        return fs.existsSync(sPath);
    };
    IoFile.mkdir = function (dirpath, mode) {
        var sFather = path.dirname(dirpath);
        if (!fs.existsSync(sFather)) {
            this.mkdir(sFather, mode);
        }
        if (!fs.existsSync(dirpath)) {
            fs.mkdirSync(dirpath, mode);
        }
        return true;
    };
    IoFile.copyFileAsync = function (sSourcePath, sTargetPath) {
        this.mkdir(path.dirname(sTargetPath));
        fs.createReadStream(sSourcePath).pipe(fs.createWriteStream(sTargetPath));
    };
    IoFile.listDir = function (sPath) {
        var aList = [];
        var stat = fs.statSync(sPath);
        if (stat.isDirectory()) {
            var readDir = fs.readdirSync(sPath);
            fs.readdirSync(sPath).forEach(function (file) {
                var aFiles = IoFile.listDir(path.join(sPath, file));
                if (aFiles.length > 0) {
                    aFiles.forEach(function (sName) {
                        aList.push(sName);
                    });
                    //aList.concat(aFiles);
                }
            });
        }
        else {
            aList.push(sPath);
        }
        return aList;
    };
    //根据文件读取配置项
    IoFile.upConfigByFile = function (sPath) {
        var sContent = this.readFile(sPath);
        return index_1.TCoreCommonFunc.jsonParse(sContent);
    };
    //将配置写入配置文件
    IoFile.inFileByConfig = function (sPath, oJson) {
        this.writeFile(sPath, index_1.TCoreCommonFunc.jsonStringify(oJson));
    };
    IoFile.writeFile = function (sPath, sContent) {
        this.mkdir(path.dirname(sPath));
        fs.writeFileSync(sPath, sContent);
    };
    IoFile.deleteFile = function (sPath) {
        fs.rmdirSync(sPath);
    };
    IoFile.readFile = function (sPath) {
        return fs.readFileSync(sPath, 'UTF-8');
    };
    IoFile.copyFile = function (sSource, sTarget) {
        this.mkdir(path.dirname(sTarget));
        fs.writeFileSync(sTarget, fs.readFileSync(sSource));
    };
    IoFile.contentIndexOf = function (sPath, sStr) {
        var sContent = this.readFile(sPath);
        return sContent.indexOf(sStr);
    };
    IoFile.insertAfter = function (sPath, sIndex, sInsert) {
        var sContent = this.readFile(sPath);
        var iIndex = sContent.indexOf(sIndex);
        var sWrite = sContent.substring(0, iIndex + sIndex.length) + sInsert + sContent.substr(iIndex + sIndex.length);
        this.writeFile(sPath, sWrite);
    };
    IoFile.insertAppend = function (sPath, sInsert) {
        var sContent = this.readFile(sPath);
        var sWrite = sContent + sInsert;
        this.writeFile(sPath, sWrite);
    };
    IoFile.parentPath = function (sPath) {
        return path.dirname(sPath);
    };
    IoFile.parentTop = function (sPath, iLevel) {
        var sReturn = sPath;
        for (var i = 0; i < iLevel; i++) {
            sReturn = this.parentPath(sReturn);
        }
        return sReturn;
    };
    IoFile.pathJoin = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var sReturn = '';
        args.forEach(function (arg) {
            sReturn = path.join(sReturn, arg);
        });
        return sReturn;
    };
    IoFile.pathNormalize = function (sPath) {
        return path.normalize(sPath);
    };
    /**
     * 平台的文件路径分隔符，'\\' 或 '/'。
     */
    IoFile.upPathSeq = function () {
        return path.sep;
    };
    IoFile.upRowSeq = function () {
        return "\n";
    };
    return IoFile;
}());
exports.IoFile = IoFile;
