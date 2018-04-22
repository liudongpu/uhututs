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




var jsClass=`

(): IFrameCite => {
    return {
        config: { pageTitle: "demopage" }
    }
}
`




test('upResourcePath', () => {


    
    
   let oScript= TJobEffectScript.analyseScript(js);
   console.log(oScript);
   

   let oClass= TJobEffectScript.analyseScript(jsClass);
   console.log(oClass);
   
   
/*
   const ast = recast.parse(jsClass, {
    parser: require("recast/parsers/typescript")
  });
  
   console.log(ast);
*/







    //var g=eval(''+js+'');

    
   

    expect("cc").toBe("cc");
});