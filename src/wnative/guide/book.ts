import {IGuideBook} from "../../air/interfaces/guide";
import {AsyncStorage,Alert} from 'react-native';
import {TCoreCommonFunc, TCoreHelperUrl} from "../../tcore/index";

import { NavigationActions } from 'react-navigation';

class Book {

    navigateUrl(that, sPageUrl : string) {

        let oPageNavTemp = null;

        if (that && that.props && that.props.navigation) {
            oPageNavTemp = that.props.navigation;

        } else if (that && that.navigate) {
            oPageNavTemp = that;
        }

        if (oPageNavTemp) {


            let urlInfo=TCoreHelperUrl.parseUrl(sPageUrl);

            if (urlInfo.baseJump === "reset") {
                

                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: urlInfo.pageName, params: { url: sPageUrl } })
                    ]
                })
                
                oPageNavTemp.dispatch(resetAction);
    
            }
            else if (urlInfo.baseJump === "replace") {
    
                let aAction = {
                    type: 'CustomNav/replace',
                    routeName: urlInfo.pageName,
                    params: { url: sPageUrl }
    
                }
    
    
    
                oPageNavTemp.dispatch(aAction);
    
            } else if (urlInfo.baseJump == "back") {
    
                oPageNavTemp.goBack();
    
            }
            else {
                //if (sTemplateUrl !== sPageUrl) {
                
                oPageNavTemp.navigate(urlInfo.pageName, { url: sPageUrl });
                //}
            }

            
        }

    }



    urlCurrentInfo(that){
        let sPageUrl=that.props.navigation.state.params.url;

        let oUrlInfo=TCoreHelperUrl.parseUrl(sPageUrl);

        return oUrlInfo; 

    }





    stateInValue(that, sKey : string,sVal:string) {

        let oObject={};
        oObject[sKey]=sVal;
        
        this.stateInObject(that,oObject);

    }

    stateUpValue(that, sKey : string) {

        return that.state[sKey];

    }



    stateInObject(that,oObject){
        that.setState(oObject);
    }

    stateInForm(that,sStart:string,oObject:any){

        let oState={};

        for(var p in oObject){
            oState['form_' + sStart + '_'+p]=oObject[p];
        }

        this.stateInObject(that,oState);

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
                if(value){
                    return TCoreCommonFunc.jsonParse < T > (value);
                }
                else{
                    return null;
                }
                
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
        }).then((response) =>{if(response.ok){ return response.json();}else{console.error(response)}})
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