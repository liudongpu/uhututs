import {AEnumRegexKey} from './../../air/define/enumer';
import {IConfigPage} from './../../air/interfaces/config';

import {KJobPageOut, KJobFileInfo, KJobCurrentParse, KJobNodeInfo, KJobTemplateInfo} from './../../air/keep/job';
import {FatherMake} from '../father/make';
import {TCoreHelperString, TBase, TCoreHelperObject, TCoreHelperMap, TCoreCommonFunc} from '../../tcore/index';
import {BankNative} from '../bank/native';

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

        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .itemAttr
                .set("onPress", "()=>{guidebook.navigateUrl(this,\"" + oNodeInfo.nodeAttr.get("href") + "\")}");
        }

        this.attrTemplate(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startTemplate));

        this.attrSource(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startSource));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startProp));
        this.attrStyle(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startStyle));

        this.attrProp(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startIcon));


        this.attrNumber(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startNumber));
        oNodeInfo
            .itemAttr
            .forEach((v, k) => {
                oNodeInfo
                    .itemAttr
                    .set(k, "{" + v + "}");
            });
        return oNodeInfo;

    }

    protected subFormat(eKey : AEnumRegexKey, sValue : string) : string {

        let sReturn = "";

        switch (eKey) {

            case AEnumRegexKey.state:

                sReturn = "{this.state." + sValue + "}";

                break;

            case AEnumRegexKey.item:

                sReturn = "{item." + sValue + "}";
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

                };

            });

        }

    }

    private attrProp(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k, '"' + v + '"');
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

    private attrStyle(oNodeInfo : KJobNodeInfo, mMap : Map < string, string >) {

        if (mMap.size > 0) {

            mMap.forEach((v, k) => {

                oNodeInfo
                    .itemAttr
                    .set(k, 'styles.' + v);

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

                        case TBase.defineData().nameOption:

                        oNodeInfo
                        .itemAttr
                        .set("options",  v);

                        break;

                };

            });

        }

    }

    subBank() {
        return new BankNative();
    }




     subPageOut(oPageOut : KJobPageOut):KJobPageOut{



        if(oPageOut.config.headerLeft){


            oPageOut.templates.forEach(fItem=>{

                if(fItem.name===oPageOut.config.headerLeft){
                    oPageOut.config.headerLeft=fItem.content;
                }
            });

        };
        if(oPageOut.config.headerRight){


            oPageOut.templates.forEach(fItem=>{

                if(fItem.name===oPageOut.config.headerRight){
                    oPageOut.config.headerRight=fItem.content;
                }
            });

        };


        return oPageOut;
    }



}
