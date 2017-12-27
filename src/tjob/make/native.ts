import { IConfigPage } from './../../air/interfaces/config';

import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import { FatherMake } from '../father/make';
import { TCoreHelperString, TBase, TCoreHelperObject, TCoreHelperMap, TCoreCommonFunc } from '../../tcore/index';
import { BankNative } from '../bank/native';
import { access } from 'fs';



export class MakeNative extends FatherMake{



    subWorkType(){
        return TBase.defineBase().workNative;
    }



    subPageConfig(sJson:string,fileInfo:KJobFileInfo):IConfigPage{



        let oDefaultConfig:IConfigPage={
            macroUrl:"dev/resources/macro/" + this.subWorkType() + ".mustache",
            pageTitle:'',
            styleUrl:'./'+fileInfo.name+'-style'
        }



        return TCoreHelperObject.assign(oDefaultConfig,TCoreCommonFunc.jsonParse(sJson));



    }




     subElementParse(oNodeInfo : KJobNodeInfo):KJobNodeInfo{




        if(oNodeInfo.sourceClass!=undefined){


            let aClass=oNodeInfo.sourceClass.split(' ');

            let aStyles=[];

            aClass.forEach(fItem=>{
                if(fItem){
                    aStyles.push('styles.'+fItem);
                }
            })


            oNodeInfo.itemAttr.set("style","["+aStyles.join(",")+"]");


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

