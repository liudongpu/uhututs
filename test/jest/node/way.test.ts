import {TNodeWayExec} from "../../../src/tnode/index";

let sTestInfo = `

//aaa
ccc
//bbb

`;

test('upResourcePath', () => {

   let sResult= TNodeWayExec.execReplaceFileContentLine({name: "execReplaceFileContentLine", textInfo: sTestInfo,textBegin:"aaa",textEnd:"bbb",textReplace:"ddd"});

    expect(sResult.indexOf("ddd")>-1).toBe(true);
});