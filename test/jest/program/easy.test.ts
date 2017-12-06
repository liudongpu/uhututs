import {TprogramEasyLanch, TprogramEasyFile} from "../../../src/tprogram/index";
import {Tbase} from "../../../src/tcore/index";




test('fileContent',()=>{


    let sSourceContent=`
    aaa
    <!--uhutu_sign_begin_ra-->
    hhh
    <!--uhutu_sign_end_ra-->
    //uhutu_sign_begin_rb
    jjj
    //uhutu_sign_end_rb
    #uhutu_sign_begin_rc
    kkk
    #uhutu_sign_end_rc
    #uhutu_sign_begin_r2
    eee
    #uhutu_sign_end_r2
    `;

    let sTargetContent=`
    aabbcc
    <!--uhutu_sign_begin_ra-->
    bbb
    <!--uhutu_sign_end_ra-->
    //uhutu_sign_begin_rb
    ccc
    //uhutu_sign_end_rb
    #uhutu_sign_begin_rc
    ddd
    #uhutu_sign_end_rc
    #uhutu_sign_begin_r3
    #uhutu_sign_end_r3
    `;



    



    //TprogramEasyFile.copyFileAndReplace("/Users/srnpr/git/stagemanage/stageweb/uhutu_ts_root/temp/git/manage/src/union/bagcomponent/header.component.html","/Users/srnpr/git/stagemanage/stageweb/src/union/bagcomponent/header.component.html")

    
    let oContent=TprogramEasyFile.replaceContent(sSourceContent,sTargetContent);
    expect(oContent.execContent.indexOf('bbb')>-1).toEqual(true);
    expect(oContent.execContent.indexOf('ccc')>-1).toEqual(true);
    expect(oContent.execContent.indexOf('ddd')>-1).toEqual(true);


    expect(oContent.sourceNotFound).toEqual(["uhutu_sign_begin_r2"]);

    expect(oContent.targetNotFounc).toEqual(["uhutu_sign_begin_r3"]);
    
})
