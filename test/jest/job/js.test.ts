

var js=`

( {


    data:{

        "da":"daa",
        "db":"dbb"
    },

    a:function(){
        console.log("aa");
        
    },

    b:function(){
        console.log("bb");
        guidebook.fa("");
    },
    c:"cc",
    d:function(){
        console.log("dd");
    }
}

)
`;


test('upResourcePath', () => {


    var g=eval(''+js+'');

    
   

    expect(g.c).toBe("cc");
});