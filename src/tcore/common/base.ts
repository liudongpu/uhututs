

export class CommonBase{


    static jsonParse<T>(sText:string):T{
        return JSON.parse(sText);
    }


    static jsonStringify<T>(oT:T):string{
        return JSON.stringify(oT);
    }

}
