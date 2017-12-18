




const defineBase={

    /**
     * 最基本根路径
     */
    pathRoot:'uhutu_ts_root',

    pathRootTemp:'temp',

    pathRootTempGit:'git',

    
    replaceContentBegin:'uhutu_sign_begin_',
    replaceContentEnd:'uhutu_sign_end_',


    tempDir:''
}



const defineProgram={


    pathManageName:'manage',


    /**
     * 执行替换的文件扩展名
     */
    fileExtReplace:'.ts,.html,.json',

    pathSkipDir:'/.git',

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



