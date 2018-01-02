import { AEnumRegexKey } from './../../air/define/enumer';
import { FatherMake } from '../father/make';
import { TBase, TCoreHelperObject, TCoreHelperMap, TCoreCommonFunc } from '../../tcore/index';
import { BankNative } from '../bank/native';
export class MakeNative extends FatherMake {
    subWorkType() {
        return TBase
            .defineBase()
            .workNative;
    }
    subPageConfig(sJson, fileInfo) {
        let oDefaultConfig = {
            macroUrl: "dev/resources/macro/" + this.subWorkType() + ".mustache",
            pageTitle: '',
            styleUrl: './' + fileInfo.name + '-style'
        };
        return TCoreHelperObject.assign(oDefaultConfig, TCoreCommonFunc.jsonParse(sJson));
    }
    subElementParse(oNodeInfo) {
        if (oNodeInfo.sourceClass != undefined) {
            let aClass = oNodeInfo
                .sourceClass
                .split(' ');
            let aStyles = [];
            aClass.forEach(fItem => {
                if (fItem) {
                    aStyles.push('styles.' + fItem);
                }
            });
            oNodeInfo
                .itemAttr
                .set("style", "[" + aStyles.join(",") + "]");
        }
        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .itemAttr
                .set("onPress", "()=>{}");
        }
        this.attrTemplate(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startTemplate));
        this.attrSource(oNodeInfo, TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, TBase.defineData().startSource));
        oNodeInfo
            .itemAttr
            .forEach((v, k) => {
            oNodeInfo
                .itemAttr
                .set(k, "{" + v + "}");
        });
        return oNodeInfo;
    }
    subFormat(eKey, sValue) {
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
    attrTemplate(oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach((v, k) => {
                switch (k) {
                    case TBase.defineData().nameCall:
                        oNodeInfo.nodeInfo = "{this.x_template_render_" + v + "(" + mMap.get(TBase.defineData().nameRecord) + ")}";
                        break;
                    case TBase.defineData().nameRender:
                        oNodeInfo.itemAttr.set("renderItem", "({item}) =>{return this.x_template_render_" + v + "(item)}");
                        break;
                }
                ;
            });
        }
    }
    attrSource(oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach((v, k) => {
                switch (k) {
                    case TBase.defineData().nameState:
                        oNodeInfo.itemAttr.set("data", "this.state." + v);
                        break;
                }
                ;
            });
        }
    }
    subBank() {
        return new BankNative();
    }
}
