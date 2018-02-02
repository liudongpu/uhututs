import {AEnumRegexKey} from './../../air/define/enumer';
import {IConfigPage} from './../../air/interfaces/config';

import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import {FatherMake} from '../father/make';
import {TCoreHelperString, TCoreHelperObject, TCoreHelperMap, TCoreCommonFunc} from '../../tcore/index';
import {BankWeapp} from '../bank/weapp';
import {TBase} from '../../tdaemon/index';

export class MakeWeapp extends FatherMake {

    subWorkType() {
        return TBase
            .defineBase()
            .workWeapp;
    }

    subPageConfig(sJson : string, fileInfo : KJobFileInfo) : IConfigPage {

        let sExtend="";
        if(this.upConfigParse().extend){
            sExtend=this.upConfigParse().extend;
        }

        let oDefaultConfig = TCoreHelperObject.parseTs < IConfigPage > ({
            macroUrl: "dev/resources/macro/" +   this.subWorkType()+sExtend + ".mustache",
            pageTitle: ''
        });
        return TCoreHelperObject.assign(oDefaultConfig, TCoreCommonFunc.jsonParse(sJson));

    }

    subElementParse(oNodeInfo : KJobNodeInfo) : KJobNodeInfo {


        

        if(oNodeInfo.sourceClass != undefined) {

            

            oNodeInfo
                .itemAttr
                .set("class", oNodeInfo.sourceClass);

        }



        this.processBaseForm(oNodeInfo);

        /*
        this.processBaseAttr(oNodeInfo);

        

        this.attrTemplate(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startTemplate));

        this.attrSource(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startSource));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startProp));
        this.attrStyle(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startStyle));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startIcon));

        this.attrHref(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startHref));

        this.attrNumber(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startNumber));

        


        this.attrExec(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startExec));


        this.attrState(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startState));

        this.attrOn(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startOn));

        */


        this.attrForm(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startForm));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startProp));


        oNodeInfo
            .itemAttr
            .forEach((v, k) => {

                if (v.startsWith("@")) {
                    oNodeInfo
                        .itemAttr
                        .set(k, this.makeFormat(v.substr(1)));
                } else {
                    oNodeInfo
                        .itemAttr
                        .set(k, "\"" + this.makeFormat(v) + "\"");
                }

            });
        
        return oNodeInfo;

    }



    private formatStart(sInput:string,sLeft:string,sRight:string):string{

        if (sInput.startsWith("@")) {
           sInput=sInput.substr(1);
        }
        else{
            sInput=sLeft+sInput+sRight;
        }
        return sInput;

    }




    private processBaseAttr(oNodeInfo : KJobNodeInfo) {

        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .nodeAttr
                .set(TBase.defineData().startHref + TBase.defineData().nameUrl, oNodeInfo.nodeAttr.get("href"));
        }

        if (oNodeInfo.nodeAttr.has("src")) {

            if (oNodeInfo.nodeName === "img"||oNodeInfo.nodeName==="iframe") {

                let sVal = oNodeInfo
                    .nodeAttr
                    .get("src");

                if (sVal.indexOf(TBase.defineBase().regexOutBegin) > -1) {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri: " + sVal + "}");
                } else if(sVal.startsWith('http')) {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri:'" + sVal + "'}");
                }else {
                    oNodeInfo
                        .itemAttr
                        .set("source", "require('" + sVal + "')");
                }

            }

        }



        if(oNodeInfo.nodeAttr.has("onclick")){
            oNodeInfo
            .nodeAttr
            .set(TBase.defineData().startOn + TBase.defineData().nameClick, oNodeInfo.nodeAttr.get("onclick"));
        }


    }

    private processBaseForm(oNodeInfo : KJobNodeInfo) {

        if (oNodeInfo.sourceName) {

           

            if (oNodeInfo.sourceType.startsWith('form')) {
                

                


                

            }

        }

    }

    protected subFormat(eKey : AEnumRegexKey, sValue : string) : string {

        let sReturn = "";

        switch (eKey) {

            case AEnumRegexKey.state:

                sReturn = "{this.state." + sValue + "}";

                break;

            case AEnumRegexKey.item:

                if (sValue.startsWith("@")) {
                    sReturn = "item." + sValue.substr(1) + "";
                } else {
                    sReturn = "{item." + sValue + "}";
                }

                break;


                case AEnumRegexKey.env:
                sReturn = "{" + sValue + "}";

                break;

        }

        return sReturn;

    }

    private attrTemplate(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameCall:

                        oNodeInfo.nodeInfo = "{this.x_template_render_" + v + "(" + mMap.get(TBase.defineData().nameRecord) + ")}";

                        break;

                    case TBase
                            .defineData()
                            .nameRender:

                        oNodeInfo
                            .itemAttr
                            .set("renderItem", "({item}) =>{return this.x_template_render_" + v + "(item)}");

                        break;



                        case TBase
                            .defineData()
                            .nameFooter:

                        oNodeInfo
                            .itemAttr
                            .set("ListFooterComponent", "() =>{return this.x_template_render_" + v + "()}");

                        break;

                        case TBase
                            .defineData()
                            .nameEmpty:

                        oNodeInfo
                            .itemAttr
                            .set("ListEmptyComponent", "() =>{return this.x_template_render_" + v + "()}");

                        break;

                };

            });

        }

    }

    private attrProp(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k,  this.formatStart(v,'',''));
            });

        }

    }

    private attrNumber(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k, v);
            });

        }

    }

    private attrForm(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameLabel:
                            case TBase.defineData().nameArrow:

                        oNodeInfo.contentBefore='<view class="th_form_item"><label>'+v+"</label>";

                        oNodeInfo.contentAfter="</view>";

                        break;

                   
                }

            });

        }

    }

    private attrStyle(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k, 'styles.' + v);

            });

        }

    }


    private attrState(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k, 'this.state.' + v);

            });

        }

    }



    private attrHref(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameUrl:

                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(this," + this.formatStart(v,'"','"')  + ")}");

                        break;

                    case TBase
                            .defineData()
                            .nameNavigation:

                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(navigation," + this.formatStart(v,'"','"')  + ")}");

                        break;

                };

            });

        }

    }

    private attrOn(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameChange:

                            oNodeInfo.itemAttr.set('onChange',"(value)=>{"+v+"}");

                        break;

                        case TBase.defineData().nameClick:


                        oNodeInfo.itemAttr.set('onClick',"()=>{"+v+"}");

                        break;
                        case TBase.defineData().namePress:


                        oNodeInfo.itemAttr.set('onPress',"()=>{"+v+"}");

                        break;

                        case TBase.defineData().nameCancel:


                        oNodeInfo.itemAttr.set('onCancel',"(value)=>{"+v+"}");

                        break;

                        case TBase.defineData().nameEnd:


                        oNodeInfo.itemAttr.set('onEndReached',"()=>{"+v+"}");

                        break;


                        case TBase.defineData().nameRefresh:


                        oNodeInfo.itemAttr.set('onRefresh',"()=>{"+v+"}");

                        break;

                };

            });

        }

    }

    private attrSource(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameState:

                        oNodeInfo
                            .itemAttr
                            .set("data", "this.state." + v);

                        break;

                    case TBase
                            .defineData()
                            .nameOption:

                        oNodeInfo
                            .itemAttr
                            .set("data", v);

                        break;

                };

            });

        }

    }

    private attrExec(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                        case TBase
                            .defineData()
                            .nameStyle:

                        oNodeInfo
                            .itemAttr
                            .set("style", v);

                        break;

                    

                };

            });

        }

    }



    subBank() {
        return new BankWeapp();
    }

    subPageOut(oPageOut : KJobPageOut) : KJobPageOut {

        if(oPageOut.config.headerLeft) {

            oPageOut
                .templates
                .forEach(fItem => {

                    if (fItem.name === oPageOut.config.headerLeft) {
                        oPageOut.config.headerLeft = fItem.content;
                    }
                });

        };
        if (oPageOut.config.headerRight) {

            oPageOut
                .templates
                .forEach(fItem => {

                    if (fItem.name === oPageOut.config.headerRight) {
                        oPageOut.config.headerRight = fItem.content;
                    }
                });

        };


        if(oPageOut.imports.length>0){
            oPageOut.imports.forEach(fItem=>{
                fItem.name="{"+fItem.name+"}";
            })
        }


        return oPageOut;
    }

}
