
var crypto=require('crypto');  

export class ProtoCrypto{



    static cryptoMd5(sInput:string){
        
var md5=crypto.createHash("md5");  
return md5.update(sInput).digest('hex');  

    }

}