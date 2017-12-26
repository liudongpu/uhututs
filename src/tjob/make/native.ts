
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import { FatherMake } from '../father/make';
import { TCoreHelperString, TBase } from '../../tcore/index';
import { BankNative } from '../bank/native';



export class MakeNative extends FatherMake{



    subWorkType(){
        return TBase.defineBase().workNative;
    }


     subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo{

        

       



        return oNodeInfo;

    }


    subBank(){
        return new BankNative();
    }




   
    

    

}

