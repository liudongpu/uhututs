import { KJobEffectScript } from './../../air/keep/job';
import { kJobImportJs } from "../../air/keep/job";




export class EffectScript {




    static analyseScript(sScript: string): KJobEffectScript {

        let oEffect = new KJobEffectScript();

        let rImport = new RegExp('\\s*import\\s*(.*?)\\s*from\\s*[\\\'|\\\"](.*?)\\\'|\\\"]', "g");

        let r = [];



        while (r = rImport.exec(sScript)) {

            let oImport = new kJobImportJs();


            oImport.name = r[1];
            oImport.from = r[2];

            if (oImport.name && oImport.from)
                oEffect.imports.push(oImport);

        }



        let rScript = new RegExp('\\((.|\s|\S|\n)*', "ig");

        let aRsc = rScript.exec(sScript);

        if (aRsc && aRsc.length > 0) {
            let sTarget = aRsc[0];

            if (sScript.indexOf('=>') > -1) {
                sTarget = sTarget.replace(/:\s*I\w*/, '');
                oEffect.script = eval(sTarget)();

            }
            else {
                oEffect.script = eval(sTarget);
            }

        }









        return oEffect;




    }


}