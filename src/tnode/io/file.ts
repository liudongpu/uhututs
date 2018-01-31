import { TCoreCommonFunc } from './../../tcore/index';
var fs = require('fs');
var path = require('path');


/**
 * 文件操作相关
 * 
 * @export
 * @class IoFile
 */
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

    /**
     * 异步文件复制  一般用于大文件拷贝
     * 
     * @static
     * @param {string} sSourcePath 
     * @param {string} sTargetPath 
     * @memberof IoFile
     */
    static copyFileAsync(sSourcePath:string, sTargetPath:string) {
        this.mkdir(path.dirname(sTargetPath));
        fs.createReadStream(sSourcePath).pipe(fs.createWriteStream(sTargetPath));
    }





    static copyDir(sSourcePath:string, sTargetPath:string){


        sSourcePath=this.pathNormalize(sSourcePath);
        sTargetPath=this.pathNormalize(sTargetPath);
        let aFiles=this.listDir(sSourcePath);
        
        aFiles.forEach(fItem=>{

            let sTarget=this.pathJoin(sTargetPath,fItem.substr(sSourcePath.length));
            this.copyFile(fItem,sTarget);

        });

    }


    /**
     * 列出路径下的子文件
     * 
     * @static
     * @param {string} sPath 
     * @returns {string[]} 
     * @memberof IoFile
     */
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
    /**
     * 根据文件读取配置项
     * 
     * @static
     * @param {string} sPath 
     * @returns 
     * @memberof IoFile
     */
    static upConfigByFile(sPath:string) {
        var sContent = this.readFile(sPath);
        return TCoreCommonFunc.jsonParse(sContent);
    }

    /**
     * 将配置写入配置文件
     * 
     * @static
     * @param {string} sPath 
     * @param {any} oJson 
     * @memberof IoFile
     */
    static inFileByConfig(sPath:string, oJson) {
        this.writeFile(sPath, TCoreCommonFunc.jsonStringify(oJson));
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

    /**
     * 文件复制
     * 
     * @static
     * @param {any} sSource 
     * @param {any} sTarget 
     * @memberof IoFile
     */
    static copyFile(sSource:string, sTarget:string) {
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