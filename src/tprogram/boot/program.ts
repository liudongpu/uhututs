import { AModelConfig } from './../../air/model/config';
import { TBase } from '../../tcore/index';



export class BootProgram{




    static upGoConfig(){
        return AModelConfig.upConfig();
    }




    static upGoWorkOfNative(){


        return TBase.defineBase().projectGo+TBase.defineBase().workNative+this.upGoConfig().projectBaseName;

    }



}

