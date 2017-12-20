
import {KjobPageOut, KjobFileInfo, KjobCurrentParse, KjobNodeInfo, KjobTemplateInfo} from './../../air/keep/job';
import { TjobFatherMake } from '../index';



export class MakeNative extends TjobFatherMake{


     makeElement(oNodeInfo : KjobNodeInfo):KjobNodeInfo{

        

        oNodeInfo.itemName=oNodeInfo.nodeName;



        return oNodeInfo;

    }

    

    

}

