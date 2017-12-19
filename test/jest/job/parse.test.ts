
import { TjobParseHtml} from "../../../src/tjob/index";

import { TnodeIoFile,TnodeIoPath} from "../../../src/tnode/index";






test('upResourcePath', () => {

  let sCwdPath= TnodeIoPath.upTestPath();

  console.log(sCwdPath)
    let sHtml=TnodeIoFile.readFile( TnodeIoFile.pathJoin(sCwdPath,"resource","html",'main.html'));


    

    let aArr=TjobParseHtml.parse();

   aArr.write(sHtml);
});