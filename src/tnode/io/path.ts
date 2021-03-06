import { IoFile } from './file';


export class IoPath{




    static upCwdPath():string{
        return process.cwd();
    }




    static upBinPath():string{
        return IoFile.parentTop(__dirname,3);
    }


    static upResourcePath():string{
        return   IoFile.pathJoin(  IoFile.parentTop(__dirname,3),"resource");
    }



    static upTestPath():string{
        return   IoFile.pathJoin(  IoFile.parentTop(__dirname,3),"test");
    }




    



}