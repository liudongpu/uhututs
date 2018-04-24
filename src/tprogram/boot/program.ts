import { AModelConfig } from './../../air/model/config';
import { TCoreCommonFunc } from '../../tcore/index';
import { TNodeIoFile } from '../../tnode/index';
import { TBase } from '../../tdaemon/index';



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


    static upGoWorkOfSite(){


        return TBase.defineBase().projectGo+TBase.defineBase().workSite+this.upGoConfig().projectBaseName;

    }



    static upGoWorkOfWeapp(){


        return TBase.defineBase().projectGo+TBase.defineBase().workWeapp+this.upGoConfig().projectBaseName;

    }


    



}

