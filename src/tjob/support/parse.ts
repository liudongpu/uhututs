import {MakeWeapp} from './../make/weapp';
import {MakeNative} from './../make/native';
import {ParseHtml} from './../parse/html';
import {KJobFileInfo} from './../../air/keep/job';
import { IConfigInfo, IConfigParse } from './../../air/interfaces/config';
import {EParseMustache} from '../../air/export/parse';
import {TNodeIoFile} from '../../tnode/index';
import {FatherMake} from '../father/make';
import {TBase} from '../../tdaemon/index';

export class SupportParse {

    static contentParse(oLocalConfig : IConfigInfo, oInfo : KJobFileInfo, oParse : IConfigParse) : string {

        let oParseMake: FatherMake = null;
        switch (oParse.type) {

                case TBase
                    .defineBase()
                    .workWeapp:

                oParseMake = new MakeWeapp();
                break;
            default:
                oParseMake = new MakeNative();
                break;

        }


        oParseMake.init(oParse);

        let oOut = ParseHtml.parse(oInfo, oParseMake);

        let sMacroFile = oOut.config.macroUrl;

        let sMacroContent = TNodeIoFile.readFile(sMacroFile);
        let sOutInfo = EParseMustache.render(sMacroContent, {out: oOut});

        return sOutInfo;
    }

}
