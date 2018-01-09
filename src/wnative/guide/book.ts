import {IGuideBook} from "../../air/interfaces/guide";
import {AsyncStorage,Alert} from 'react-native';
import {TCoreCommonFunc} from "../../tcore/index";



class Book {

    navigateUrl(that, sUrl : string) {

        let oPageNavTemp = null;

        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;

        } else if (that && that.navigate) {
            oPageNavTemp = that;
        }

        if (oPageNavTemp) {
            oPageNavTemp.navigate(sUrl);
        }

    }

    stateUpValue(that, sKey : string) {

        return that.state[sKey];

    }

    stateUpForm(that, sStart : string) {
        let oValue = {};

        let sFormStart = 'form_' + sStart + '_';
        for (var p in that.state) {
            if (p.startsWith(sFormStart)) {

                oValue[p.substr(sFormStart.length)] = that.state[p];
            }
        }
        return oValue;

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


    storeRemoveItem(sKey : string) : Promise < void > {

        return AsyncStorage.removeItem(sKey);
    }



    fetchPost(sUrl : string, oJsonInput : any) : Promise < any > {

        return fetch(sUrl, {
            method: 'POST',
            body: TCoreCommonFunc.jsonStringify(oJsonInput)
        }).then((response) => response.json())
    }



     checkFlagProduct():boolean {
        let bReturn = true;
        if (__DEV__ != undefined && __DEV__ === true) {
            console.log(__DEV__);
            bReturn = false;
        }
        return bReturn;
    }



    componentMessageAlert(sTitle:string,sMessage:string){

        Alert.alert(sTitle,sMessage);
    }




    




}

const GuideBook = new Book();

export {GuideBook};