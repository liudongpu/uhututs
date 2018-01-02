import { IoFile } from '../io/file';
export class WayExec {
    static bashExec(...aArgs) {
        aArgs.forEach(fItem => {
            switch (fItem.name) {
                case "execReplaceFileContentLine":
                    this.execReplaceFileContentLine(fItem);
                    break;
            }
        });
    }
    /**
     * 替换文件内容
     *
     * @private
     * @static
     * @param {IArgsExec} oArg
     * @memberof WayExec
     */
    static execReplaceFileContentLine(oArg) {
        let sInfo = "";
        let sReturn = "";
        if (oArg.filePath) {
            sInfo = IoFile.readFile(oArg.filePath);
        }
        else {
            sInfo = oArg.textInfo;
        }
        let sRegex = "([\r\n]\s*.*" + oArg.textBegin + "\s*[\r\n])(.|\s|\S|\n)*([\r\n]\s*.*" + oArg.textEnd + "\s*[\r\n])";
        let oRegexItem = new RegExp(sRegex, "g");
        let oResult = oRegexItem.exec(sInfo);
        if (oResult) {
            sReturn = sInfo.replace(oResult[0], oResult[1] + oArg.textReplace + oResult[3]);
        }
        if (oArg.filePath) {
            IoFile.writeFile(oArg.filePath, sReturn);
        }
        return sReturn;
    }
}
