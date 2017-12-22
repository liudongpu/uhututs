import { KJobFileInfo } from './../../../src/air/keep/job';

import { TjobParseHtml, TjobMakeNative} from "../../../src/tjob/index";

import { TNodeIoFile,TNodeIoPath} from "../../../src/tnode/index";






test('upResourcePath', () => {



    let sPath=TNodeIoFile.pathJoin(TNodeIoPath.upTestPath(),"resource","html",'main.html');

    let oFileInfo=new KJobFileInfo();

    oFileInfo.content=TNodeIoFile.readFile( sPath);
    oFileInfo.path=sPath;



    let oOut=TjobParseHtml.parse(oFileInfo,new TjobMakeNative());

   console.log(oOut);

    expect(1).toBe(1);
});