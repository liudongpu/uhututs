"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program_1 = require("./../../air/keep/program");
var launch_1 = require("./../easy/launch");
var index_1 = require("../../tnode/index");
var index_2 = require("../../tcore/index");
var ProcessPath = /** @class */ (function () {
    function ProcessPath() {
    }
    ProcessPath.upPagesPath = function () {
        var sPagesPath = launch_1.EasyLaunch.upDevPathForPages("");
        var aFiles = index_1.TNodeIoFile.listDir(sPagesPath);
        var aNewName = [];
        aFiles.forEach(function (sName) {
            var cFile = new program_1.KProgramFileInfo();
            var sExt = index_1.TNodeIoFile.upExtName(sName);
            if (sExt === '.html') {
                cFile.filePath = 'pages' + sName
                    .replace(sPagesPath, '')
                    .replace(sExt, '');
                cFile.uqName = index_2.TCoreHelperString.replaceAll(cFile.filePath, index_1.TNodeIoFile.upPathSeq(), "_");
                cFile.importName = "import " + cFile.uqName + " from './" + cFile.filePath + "';";
                cFile.screenName = cFile.uqName + ":{screen:" + cFile.uqName + "},";
                aNewName.push(cFile);
            }
        });
        var aImport = [];
        var aScreen = [];
        aNewName.forEach(function (cFile) {
            aImport.push(cFile.importName);
        });
        return aNewName;
    };
    return ProcessPath;
}());
exports.ProcessPath = ProcessPath;
