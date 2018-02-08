"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var job_1 = require("./../../air/keep/job");
var job_2 = require("../../air/keep/job");
var EffectScript = /** @class */ (function () {
    function EffectScript() {
    }
    EffectScript.analyseScript = function (sScript) {
        var oEffect = new job_1.KJobEffectScript();
        var rImport = new RegExp('\\s*import\\s*(.*?)\\s*from\\s*[\\\'|\\\"](.*?)\\\'|\\\"]', "g");
        var r = [];
        while (r = rImport.exec(sScript)) {
            var oImport = new job_2.kJobImportJs();
            oImport.name = r[1];
            oImport.from = r[2];
            oEffect.imports.push(oImport);
        }
        var rScript = new RegExp('\\(\\{(.|\s|\S|\n)*\\}\\)', "ig");
        var aRsc = rScript.exec(sScript);
        if (aRsc && aRsc.length > 0) {
            oEffect.script = eval(aRsc[0]);
        }
        return oEffect;
    };
    return EffectScript;
}());
exports.EffectScript = EffectScript;
