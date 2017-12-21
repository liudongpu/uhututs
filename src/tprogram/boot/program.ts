import { AModelConfig } from './../../air/model/config';
import { TBase, TCoreCommonFunc } from '../../tcore/index';
import { TNodeIoFile } from '../../tnode/index';



export class BootProgram{



    


    static upGoConfig(){


        let oConfig=AModelConfig.upConfig();

        if(!oConfig.badgeFlagGenerate){

            TBase.logError(3911002);
        }


        return oConfig;
    }




    static upGoWorkOfNative(){


        return TBase.defineBase().projectGo+TBase.defineBase().workNative+this.upGoConfig().projectBaseName;

    }



}

