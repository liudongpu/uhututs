import {Tbase} from "../../tcore/index";
import {TnodeIoFile} from "../../tnode/index";

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

        if (!TnodeIoFile.flagExist(sTargetFile)) {

            TnodeIoFile.copyFile(sSourceFile, sTargetFile);
        } else {

            let sSourceContent = TnodeIoFile.readFile(sSourceFile);
            let sTargetContent = TnodeIoFile.readFile(sTargetFile);
            let sNewContent = this.replaceContent(sSourceContent, sTargetContent);

            TnodeIoFile.writeFile(sTargetFile, sTargetContent);

        }

    }

    static replaceContent(sSourceContent : string, sTargetContent : string) : EasyFileReplaceContent {

        let oEasyFileContent = new EasyFileReplaceContent();

        let sStart = Tbase
            .defineBase()
            .replaceContentBegin;
        let sEnd = Tbase
            .defineBase()
            .replaceContentEnd;

        let sReturn = sSourceContent;

        let sRegexLeft = "([\r\n])(\s*)(.*)(";
        let sRegexRight = ")(\\w+)(\s*)([\r\n])";

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
                    sTargetContent = sTargetContent.replace(oContentInfo[0], '');
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

        oEasyFileContent.targetContent = sTargetContent;

        oEasyFileContent.execContent = sReturn;

        let oCheckMatch = sTargetContent.match(new RegExp(sStart+".*", "g"));

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
