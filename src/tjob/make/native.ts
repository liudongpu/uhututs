
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import { AModelTrans } from '../../air/model/trans';
import { FatherMake } from '../father/make';



export class MakeNative extends FatherMake{


     subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo{

        

       



        return oNodeInfo;

    }


    subElementTrans(){
        return AModelTrans.upNative();
    }
    

    

}

