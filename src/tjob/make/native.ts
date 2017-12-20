
import {KjobPageOut, KjobFileInfo, KjobCurrentParse, KjobNodeInfo, KjobTemplateInfo} from './../../air/keep/job';
import { AmodelTrans } from '../../air/model/trans';
import { FatherMake } from '../father/make';



export class MakeNative extends FatherMake{


     subElementParse(oNodeInfo : KjobNodeInfo):KjobNodeInfo{

        

       



        return oNodeInfo;

    }


    subElementTrans(){
        return AmodelTrans.upNative();
    }
    

    

}

