import { KjobFileInfo } from './../../../src/air/keep/job';

import { TjobParseHtml} from "../../../src/tjob/index";

import { TnodeIoFile,TnodeIoPath} from "../../../src/tnode/index";






test('upResourcePath', () => {



    let sPath=TnodeIoFile.pathJoin(TnodeIoPath.upTestPath(),"resource","html",'main.html');

    let oFileInfo=new KjobFileInfo();

    oFileInfo.content=TnodeIoFile.readFile( sPath);
    oFileInfo.path=sPath;


    

    let oOut=TjobParseHtml.parse(oFileInfo);

   console.log(oOut);

    expect(1).toBe(1);
});