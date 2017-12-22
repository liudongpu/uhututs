import {KJobFileInfo} from './../../../src/air/keep/job';

import {TjobParseHtml, TjobMakeNative} from "../../../src/tjob/index";

import {TNodeIoFile, TNodeIoPath} from "../../../src/tnode/index";
import {EParseMustache} from '../../../src/air/export/parse';

test('upResourcePath', () => {

    let sPath = TNodeIoFile.pathJoin(TNodeIoPath.upTestPath(), "resource", "html", 'main.html');

    let oFileInfo = new KJobFileInfo();

    oFileInfo.content = TNodeIoFile.readFile(sPath);
    oFileInfo.path = sPath;

    let oOut = TjobParseHtml.parse(oFileInfo, new TjobMakeNative());

    let sMacroFile = TNodeIoFile.pathJoin(TNodeIoPath.upTestPath(), "resource", "macro", 'native.mustache');

    let sMacroContent = TNodeIoFile.readFile(sMacroFile);
    let sOutInfo = EParseMustache.render(sMacroContent, {out:oOut});

    console.log(sOutInfo);

    expect(1).toBe(1);
});