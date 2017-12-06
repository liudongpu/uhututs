




const defineBase={

    /**
     * 最基本根路径
     */
    pathRoot:'uhutu_ts_root',

    pathRootTemp:'temp',

    pathRootTempGit:'git',

    
    replaceContentBegin:'uhutu_sign_begin_',
    replaceContentEnd:'uhutu_sign_end_',


    tempDir:'uhutu_ts_temp'
}



const defineProgram={


    pathManageName:'manage',

    gitManageUrl:'git@code.aliyun.com:liudongpu/zoomanage.git'
};







export class AdefineStart{


    static upBase(){
        return defineBase;
    }


    static upProgram(){
        return defineProgram;
    }

}



