
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import { AModelTrans } from '../../air/model/trans';
import { FatherMake } from '../father/make';
import { TCoreHelperString, TBase } from '../../tcore/index';



export class MakeNative extends FatherMake{



    subWorkType(){
        return TBase.defineBase().workNative;
    }


     subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo{

        

       



        return oNodeInfo;

    }


    subElementTrans(){
        return AModelTrans.upNative();
    }


   
    

    

}

