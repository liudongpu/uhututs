import { TBase } from '../../tdaemon/index';
import {TNodeIoFile} from "../../tnode/index";

class EasyFileReplaceContent {
    sourceContent : string = ''
    targetContent : string = ''
    /**
     * 替换结果
     *
     * @type {string}
     * @memberof EasyFileReplaceContent
     */
    execContent : string = ''
    sourceNotFound : string[] = []
    targetNotFounc : string[] = []
}

export class EasyFile {

    static copyFileAndReplace(sSourceFile : string, sTargetFile : string) {

        if (!TNodeIoFile.flagExist(sTargetFile)) {

            TNodeIoFile.copyFile(sSourceFile, sTargetFile);
        } else {

            let sSourceContent = TNodeIoFile.readFile(sSourceFile);
            let sTargetContent = TNodeIoFile.readFile(sTargetFile);
            let oContentInfo = this.replaceContent(sSourceContent, sTargetContent);

            if (oContentInfo.sourceNotFound.length > 0) {
                TBase.logWarn(3711002, [
                    sSourceFile,
                    oContentInfo
                        .sourceNotFound
                        .join(',')
                ]);
            }
            if (oContentInfo.targetNotFounc.length > 0) {
                TBase.logWarn(3711003, [
                    sSourceFile,
                    oContentInfo
                        .targetNotFounc
                        .join(',')
                ]);
            }


            if(sTargetContent!=oContentInfo.execContent)
            {
                TNodeIoFile.writeFile(sTargetFile, oContentInfo.execContent);
            }
            

        }

    }

    static copyDirAndReplace(sSourceDir : string, sTargetDir : string, sReplaceFileExt : string, sSkipDir : string) {

        let aFiles = TNodeIoFile.listDir(sSourceDir);

        let aSkip = sSkipDir.split(',');

        aFiles.forEach(fItem => {

            let sSubPath = fItem.substr(sSourceDir.length);

            let bFlagSkip = false;

            aSkip.forEach(fItem => {
                if (sSubPath.startsWith(fItem)) {
                    bFlagSkip = true;
                }
            })

            if (!bFlagSkip) {
                let sExtName = TNodeIoFile.upExtName(sSubPath);

                let sTargetFile = TNodeIoFile.pathJoin(sTargetDir, sSubPath);
                if (sReplaceFileExt.indexOf(sExtName) > -1) {

                    this.copyFileAndReplace(fItem, sTargetFile);
                } else {
                    TNodeIoFile.copyFileAsync(fItem, sTargetFile);
                }
            }

        });

    }

    static replaceContent(sSourceContent : string, sTargetContent : string) : EasyFileReplaceContent {

        let oEasyFileContent = new EasyFileReplaceContent();

        let sStart = TBase
            .defineBase()
            .replaceSignBegin;
        let sEnd = TBase
            .defineBase()
            .replaceSignEnd;

        let sReturn = sSourceContent;

        let sCheckTarget=sTargetContent;

        let sRegexLeft = "([\r\n])(\s*)(.*)(";
        let sRegexRight = ")(\\w+)(\s|.)*([\r\n])";

        let sRegexInfo = "(.|\s|\S|\r|\n)*?";

        let sRegex = sRegexLeft + sStart + sRegexRight;

        let oRegexBegin = new RegExp(sRegex, "g");

        let oMapReplace = new Map < string,
            string > ();

        let oSourceMatch = sSourceContent.match(oRegexBegin);

        if (oSourceMatch != null) {
            oSourceMatch.forEach(fItem => {

                let oRegexItem = new RegExp(sRegex);
                let oResult = oRegexItem.exec(fItem);

                let sName = oResult[5];

                let sRegexContent = sStart + sName + sRegexInfo + sEnd + sName;

                let oRegexContent = new RegExp(sRegexContent, "g");

                let oContentInfo = oRegexContent.exec(sTargetContent);

                if (oContentInfo != null && oContentInfo.length > 0) {
                    oMapReplace.set(sName, oContentInfo[0]);
                    sCheckTarget = sCheckTarget.replace(oContentInfo[0], '');
                } else {

                    oEasyFileContent
                        .sourceNotFound
                        .push(sStart + sName);
                }
            });
        }

        oMapReplace.forEach((fVal, fKey) => {

            sReturn = sReturn.replace(new RegExp(sStart + fKey + sRegexInfo + sEnd + fKey, "g"), fVal);
        });

        oEasyFileContent.targetContent = sCheckTarget;

        oEasyFileContent.execContent = sReturn;

        let oCheckMatch = sCheckTarget.match(new RegExp(sStart + ".*", "g"));

        if (oCheckMatch != null) {
            oCheckMatch.forEach(fItem => {
                oEasyFileContent
                    .targetNotFounc
                    .push(fItem);
            });
        }

        return oEasyFileContent;

    }

}
