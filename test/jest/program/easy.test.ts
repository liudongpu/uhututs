import {TprogramEasyLanch, TprogramEasyFile} from "../../../src/tprogram/index";
import {Tbase} from "../../../src/tcore/index";




test('fileContent',()=>{


    let sSourceContent=`
    aaa
    #uhutu_sign_begin_r1
    #uhutu_sign_end_r1
    #uhutu_sign_begin_r2
    eee
    #uhutu_sign_end_r2
    `;

    let sTargetContent=`
    aabbcc
    #uhutu_sign_begin_r1
    bbb
    ccc
    ddd
    #uhutu_sign_end_r1
    #uhutu_sign_begin_r3
    #uhutu_sign_end_r3
    `;



    let oContent=TprogramEasyFile.replaceContent(sSourceContent,sTargetContent);


    console.log(oContent);

    expect(oContent.sourceNotFound).toEqual(["uhutu_sign_begin_r2"]);

    expect(oContent.targetNotFounc).toEqual(["uhutu_sign_begin_r3"]);
})
