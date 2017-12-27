
import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import { FatherMake } from '../father/make';
import { TCoreHelperString, TBase } from '../../tcore/index';
import { BankNative } from '../bank/native';



export class MakeNative extends FatherMake{



    subWorkType(){
        return TBase.defineBase().workNative;
    }


     subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo{




        if(oNodeInfo.sourceClass!=undefined){

            

        }

        

       if(oNodeInfo.nodeAttr.has("href")){
           oNodeInfo.itemAttr.set("onPress","()=>{}");
       }





       oNodeInfo.itemAttr.forEach((v,k)=>{
           oNodeInfo.itemAttr.set(k,"{"+v+"}");
       })



        return oNodeInfo;

    }


    subBank(){
        return new BankNative();
    }




   
    

    

}

