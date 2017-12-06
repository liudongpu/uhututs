import {Tbase} from "../../tcore/index";
import {TnodeIoFile} from "../../tnode/index";

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

    static replaceContent(sSourceContent : string, sTargetContent : string) : string {

        let sStart = Tbase
            .defineBase()
            .replaceContentBegin;
        let sEnd = Tbase
            .defineBase()
            .replaceContentEnd;

        let sReturn = sSourceContent;

        let sRegexLeft = "([\r\n])(\s*)(.*)(";
        let sRegexRight = ")(\\w+)(\s*)([\r\n])";

        let sRegex = sRegexLeft + sStart + sRegexRight;

        let oRegexBegin = new RegExp(sRegex, "gm");

        sSourceContent
            .match(oRegexBegin)
            .forEach(fItem => {

                let oRegexItem = new RegExp(sRegex);
                let oResult = oRegexItem.exec(fItem);

                let sName = oResult[5];

                let sRegexContent=sStart + sName + "(.|\s|\S|\r|\n)*?" + sEnd + sName;

                let oRegexContent = new RegExp(sRegexContent, "g");

                let oContentInfo=oRegexContent.exec(sTargetContent);

                if(oContentInfo!=null&&oContentInfo.length>0){
                    sReturn=sReturn.replace(new RegExp(sRegexContent,"g"),oContentInfo[0]);
                }
                else{
                    Tbase.logWarn(3711002,[sStart+sName]);
                }


                

            });

        return sReturn;

    }

}
