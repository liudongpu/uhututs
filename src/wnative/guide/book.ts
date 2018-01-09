import {IGuideBook} from "../../air/interfaces/guide";
import {AsyncStorage} from 'react-native';
import {TCoreCommonFunc} from "../../tcore/index";

class Book {

    navigateUrl(that, sUrl : string) {

        let oPageNavTemp = null;

        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;

        }
        else if (that && that.navigate) {
            oPageNavTemp = that;
        }


        if(oPageNavTemp){
            oPageNavTemp
            .navigate(sUrl);
        }
        


        

    }

    storeGetObject < T > (sKey : string) : Promise < T > {

        return this
            .storeGetItem(sKey)
            .then((value) => {
                return TCoreCommonFunc.jsonParse < T > (value)
            });
    }

    storeSetObject < T > (sKey : string, tValue : T) : Promise < void > {

        return this.storeSetItem(sKey, TCoreCommonFunc.jsonStringify(tValue));
    }

    storeGetItem(sKey : string) : Promise < string > {

        return AsyncStorage.getItem(sKey);
    }

    storeSetItem(sKey : string, sValue : string) : Promise < void > {

        return AsyncStorage.setItem(sKey, sValue);
    }





    fetchPost(sUrl:string,oJsonInput:any):Promise<any>{

        return fetch(sUrl,{
            method: 'POST',
            body:TCoreCommonFunc.jsonStringify(oJsonInput)
        })
        .then((response) => response.json())
    }


}

const GuideBook = new Book();

export {GuideBook};