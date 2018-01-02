import { KProgramFileInfo } from './../../air/keep/program';
import { EasyLaunch } from './../easy/launch';
import { TNodeIoFile } from '../../tnode/index';
import { TCoreHelperString } from '../../tcore/index';
export class ProcessPath {
    static upPagesPath() {
        let sPagesPath = EasyLaunch.upDevPathForPages("");
        let aFiles = TNodeIoFile.listDir(sPagesPath);
        let aNewName = [];
        aFiles.forEach((sName) => {
            let cFile = new KProgramFileInfo();
            let sExt = TNodeIoFile.upExtName(sName);
            if (sExt === '.html') {
                cFile.filePath = 'pages' + sName
                    .replace(sPagesPath, '')
                    .replace(sExt, '');
                cFile.uqName = TCoreHelperString.replaceAll(cFile.filePath, TNodeIoFile.upPathSeq(), "_");
                cFile.importName = "import " + cFile.uqName + " from './" + cFile.filePath + "';";
                cFile.screenName = cFile.uqName + ":{screen:" + cFile.uqName + "},";
                aNewName.push(cFile);
            }
        });
        let aImport = [];
        let aScreen = [];
        aNewName.forEach((cFile) => {
            aImport.push(cFile.importName);
        });
        return aNewName;
    }
}
