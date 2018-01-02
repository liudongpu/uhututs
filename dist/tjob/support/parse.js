import { MakeNative } from './../make/native';
import { ParseHtml } from './../parse/html';
import { EParseMustache } from '../../air/export/parse';
import { TNodeIoFile } from '../../tnode/index';
export class SupportParse {
    static contentParse(oLocalConfig, oInfo, sType) {
        let oOut = ParseHtml.parse(oInfo, new MakeNative());
        let sMacroFile = oOut.config.macroUrl;
        let sMacroContent = TNodeIoFile.readFile(sMacroFile);
        let sOutInfo = EParseMustache.render(sMacroContent, { out: oOut });
        return sOutInfo;
    }
}
