import {TJobEffectScript} from '../../../src/tjob/index';

var js=`import {LogicDemo} from '../../../scripts/logic/demo';

({

    config: {
        "pageTitle": "项目维护",
        "headerRight": "t_occupy"
    },

    data: {

        "da": "daa",
        "db": "dbb"
    },

    bindLogA: function () {
        console.log("aa");

    },

    bindLogB: function () {
        console.log("bb");
    },
    c: "cc",
    bindLogC: function () {
        console.log("dd");
    }
})
`;


test('upResourcePath', () => {


    
    
   let oScript= TJobEffectScript.analyseScript(js);

   console.log(oScript);

    //var g=eval(''+js+'');

    
   

    expect("cc").toBe("cc");
});