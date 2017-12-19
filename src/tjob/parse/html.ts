import { EParseHtml } from "../../air/export/parse";




export class ParseHtml{


    static parse():EParseHtml{

        let oParse=new EParseHtml({


           onopentag(sName: string, oAttr){

            console.log(sName)

           }

        });


        return oParse;

    }

    


}
