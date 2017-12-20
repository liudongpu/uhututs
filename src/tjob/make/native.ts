
import {KjobPageOut, KjobFileInfo, KjobCurrentParse, KjobNodeInfo, KjobTemplateInfo} from './../../air/keep/job';
import { FatherMake } from '../father/make';



export class MakeNative extends FatherMake{


     makeElement(oNodeInfo : KjobNodeInfo):KjobNodeInfo{

        

        oNodeInfo.itemName=oNodeInfo.nodeName;



        return oNodeInfo;

    }

    

    

}

