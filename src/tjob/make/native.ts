import {AEnumRegexKey} from './../../air/define/enumer';
import {IConfigPage} from './../../air/interfaces/config';

import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import {FatherMake} from '../father/make';
import {TCoreHelperString, TCoreHelperObject, TCoreHelperMap, TCoreCommonFunc} from '../../tcore/index';
import {BankNative} from '../bank/native';
import {TBase} from '../../tdaemon/index';

export class MakeNative extends FatherMake {

    subWorkType() {
        return TBase
            .defineBase()
            .workNative;
    }

    subPageConfig(sJson : string, fileInfo : KJobFileInfo) : IConfigPage {

        let oDefaultConfig = TCoreHelperObject.parseTs < IConfigPage > ({
            macroUrl: "dev/resources/macro/" + this.subWorkType() + ".mustache",
            pageTitle: '',
            styleUrl: './' + fileInfo.name + '-style'
        });
        return TCoreHelperObject.assign(oDefaultConfig, TCoreCommonFunc.jsonParse(sJson));

    }

    subElementParse(oNodeInfo : KJobNodeInfo) : KJobNodeInfo {

        if(oNodeInfo.sourceClass != undefined) {

            let aClass = oNodeInfo
                .sourceClass
                .split(' ');

            let aStyles = [];

            aClass.forEach(fItem => {
                if (fItem) {

                    if (fItem.startsWith("tg_")) {
                        aStyles.push('styletg.' + fItem);
                    } else {
                        aStyles.push('styles.' + fItem);
                    }

                }
            })

            oNodeInfo
                .itemAttr
                .set("style", "[" + aStyles.join(",") + "]");

        }

        this.processBaseAttr(oNodeInfo);

        this.processBaseForm(oNodeInfo);

        this.attrTemplate(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startTemplate));

        this.attrSource(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startSource));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startProp));
        this.attrStyle(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startStyle));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startIcon));

        this.attrHref(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startHref));

        this.attrNumber(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startNumber));

        this.attrForm(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startForm));


        this.attrExec(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startExec));


        this.attrState(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startState));

        this.attrOn(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startOn));


        this.attrBind(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startBind));


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
                        .set(k, "{" + this.makeFormat(v) + "}");
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

            oNodeInfo
                .itemAttr
                .set('value', 'this.state.' + oNodeInfo.sourceName);

            if (oNodeInfo.sourceType.startsWith('form')) {
                oNodeInfo
                    .itemAttr
                    .set("onChange", "(value)=>{this.setState({" + oNodeInfo.sourceName + ":value})}");
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
                    .set(k,  this.formatStart(v,'"','"'));
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

                        oNodeInfo.nodeInfo = v;

                        break;

                    case TBase
                            .defineData()
                            .nameArrow:

                        oNodeInfo.nodeInfo = '<List.Item arrow="horizontal">' + v + '</List.Item>';

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



    /**
     * 处理函数  native的函数去掉function字符串
     * 
     * @private
     * @param {string} sString 
     * @returns {string} 
     * @memberof MakeNative
     */
    private methodParse(sString:string):string{

        let iIndex=sString.indexOf('(');
        return sString.substr(iIndex);
    }


    /**
     * bind绑定名称
     * 
     * @private
     * @param {string} sString 
     * @returns {string} 
     * @memberof MakeNative
     */
    private bindName(sString:string):string{
        return "this."+sString+".bind(this)";
    }


    private attrBind(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                switch (k) {

                         
                        case TBase.defineData().namePress:
                        case TBase.defineData().nameClick:


                            oNodeInfo.itemAttr.set('onClick',this.bindName(v));

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
        return new BankNative();
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

            
            /*
            oPageOut.imports.forEach(fItem=>{
                fItem.name="{"+fItem.name+"}";
            })
            */
        }


        if(oPageOut.methods.length>0){
            oPageOut.methods.forEach(fItem=>{
                fItem.method=this.methodParse(fItem.method);
            })
        }


        return oPageOut;
    }

}
