import {TprogramEasyLanch, TprogramEasyFile} from "../../../src/tprogram/index";
import {Tbase} from "../../../src/tcore/index";




test('fileContent',()=>{


    let sSourceContent=`
    aabbcc
    #uhutu_sign_begin_r1
    #uhutu_sign_end_r1
    #uhutu_sign_begin_r2
    fff
    #uhutu_sign_end_r2
    `;

    let sTargetContent=`
    aabbcc
    #uhutu_sign_begin_r1
    abcdefg
    ggadfadfsafdas
    gdafdsafdsfa
    #uhutu_sign_end_r1
    #uhutu_sign_begin_r3
    #uhutu_sign_end_r3
    `;



    let oContent=TprogramEasyFile.replaceContent(sSourceContent,sTargetContent);


    console.log(oContent);




})
