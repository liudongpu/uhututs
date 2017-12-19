import { CommonBase } from './../../tcore/common/base';
import fs = require('fs');
import path = require('path');



export class IoFile{


    static chmodSync(sPath, iMode) {
        if (iMode == undefined) {
            iMode = 774;
        }
        fs.chmodSync(sPath, iMode);
    }

    static upFilePath(sPath) {

        return this.pathNormalize(sPath);
    }

    static upBaseName(sFile, sExt) {
        if (sExt == undefined) {
            sExt = this.upExtName(sFile);
        }

        return path.basename(sFile, sExt);
    }
    static upExtName(sFile) {
        return path.extname(sFile);
    }

    /**
     * 是否存在路径
     * 
     * @static
     * @param {string} sPath 
     * @returns {boolean} 
     * @memberof IoFile
     */
    static flagExist(sPath:string):boolean {
        return fs.existsSync(sPath);
    }
    static mkdir(dirpath, mode?) {
        var sFather = path.dirname(dirpath);
        if (!fs.existsSync(sFather)) {
            this.mkdir(sFather, mode);
        }
        if (!fs.existsSync(dirpath)) {
            fs.mkdirSync(dirpath, mode);
        }

        return true;
    }

    static copyFileAsync(sSourcePath, sTargetPath) {
        this.mkdir(path.dirname(sTargetPath));
        fs.createReadStream(sSourcePath).pipe(fs.createWriteStream(sTargetPath));
    }

    static listDir(sPath:string) :string[]{
        var aList = [];


        var stat = fs.statSync(sPath);

        if (stat.isDirectory()) {
            var readDir = fs.readdirSync(sPath);
            fs.readdirSync(sPath).forEach(
                function (file) {
                    var aFiles = IoFile.listDir(path.join(sPath, file));
                    if (aFiles.length > 0) {
                        aFiles.forEach(
                            function (sName) {
                                aList.push(sName);
                            }
                        );
                        //aList.concat(aFiles);
                    }
                }
            )
        } else {
            aList.push(sPath);
        }

        return aList;

    }
    //根据文件读取配置项
    static upConfigByFile(sPath) {
        var sContent = this.readFile(sPath);
        return CommonBase.jsonParse(sContent);
    }
    //将配置写入配置文件
    static inFileByConfig(sPath, oJson) {
        this.writeFile(sPath, CommonBase.jsonStringify(oJson));
    }


    static writeFile(sPath, sContent) {

        this.mkdir(path.dirname(sPath));
        fs.writeFileSync(sPath, sContent);

    }


    static deleteFile(sPath){
        fs.rmdirSync(sPath);
    }


    static readFile(sPath:string) {
        return fs.readFileSync(sPath, 'UTF-8');
    }
    static copyFile(sSource, sTarget) {
        this.mkdir(path.dirname(sTarget));
        fs.writeFileSync(sTarget, fs.readFileSync(sSource));

    }

    static contentIndexOf(sPath, sStr) {
        var sContent = this.readFile(sPath);
        return sContent.indexOf(sStr);

    }

    


    static insertAfter(sPath, sIndex, sInsert) {
        var sContent = this.readFile(sPath);
        var iIndex = sContent.indexOf(sIndex);
        var sWrite = sContent.substring(0, iIndex + sIndex.length) + sInsert + sContent.substr(iIndex + sIndex.length);
        this.writeFile(sPath, sWrite);
    }
    static insertAppend(sPath, sInsert) {
        var sContent = this.readFile(sPath);

        var sWrite = sContent + sInsert;
        this.writeFile(sPath, sWrite);
    }

    static parentPath(sPath) {
        return path.dirname(sPath);
    }


    static parentTop(sPath: string, iLevel: number) {
        var sReturn = sPath;
        for (var i = 0; i < iLevel; i++) {
            sReturn = this.parentPath(sReturn);
        }
        return sReturn;
    }

    static pathJoin(...args:string[]):string {

        var sReturn = '';
        args.forEach(function (arg) {
            sReturn = path.join(sReturn, arg);
        });

        return sReturn;
    }
    static pathNormalize(sPath) {
        return path.normalize(sPath);
    }

    /**
     * 平台的文件路径分隔符，'\\' 或 '/'。
     */
    static upPathSeq() {
        return path.sep;
    }

    static upRowSeq(){
        return "\n";
    }


} 