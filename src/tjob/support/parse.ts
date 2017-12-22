import { MakeNative } from './../make/native';
import { ParseHtml } from './../parse/html';
import { KJobFileInfo } from './../../air/keep/job';
import { IConfigInfo } from './../../air/interfaces/config';


export class  SupportParse {
  


    static contentParse(oLocalConfig:IConfigInfo,oInfo:KJobFileInfo,sType:string):string{


       let oOut= ParseHtml.parse(oInfo,new MakeNative());

        return oOut.content;
    }

}

