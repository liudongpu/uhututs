"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enumer_1 = require("./../../air/define/enumer");
var make_1 = require("../father/make");
var index_1 = require("../../tcore/index");
var weapp_1 = require("../bank/weapp");
var index_2 = require("../../tdaemon/index");
var MakeWeapp = /** @class */ (function (_super) {
    __extends(MakeWeapp, _super);
    function MakeWeapp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeWeapp.prototype.subWorkType = function () {
        return index_2.TBase
            .defineBase()
            .workWeapp;
    };
    MakeWeapp.prototype.subPageConfig = function (sJson, fileInfo) {
        var sExtend = "";
        if (this.upConfigParse().extend) {
            sExtend = this.upConfigParse().extend;
        }
        var oDefaultConfig = index_1.TCoreHelperObject.parseTs({
            macroUrl: "dev/resources/macro/" + this.subWorkType() + sExtend + ".mustache",
            pageTitle: ''
        });
        return index_1.TCoreHelperObject.assign(oDefaultConfig, index_1.TCoreCommonFunc.jsonParse(sJson));
    };
    MakeWeapp.prototype.subElementParse = function (oNodeInfo) {
        var _this = this;
        if (oNodeInfo.sourceClass != undefined) {
            oNodeInfo
                .itemAttr
                .set("class", oNodeInfo.sourceClass);
        }
        this.processBaseForm(oNodeInfo);
        /*
        this.processBaseAttr(oNodeInfo);

        

        
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
        this.attrTemplate(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startTemplate));
        this.attrBind(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startBind));
        this.attrForm(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startForm));
        this.attrProp(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startProp));
        oNodeInfo
            .itemAttr
            .forEach(function (v, k) {
            if (v.startsWith("@")) {
                oNodeInfo
                    .itemAttr
                    .set(k, _this.makeFormat(v.substr(1)));
            }
            else {
                oNodeInfo
                    .itemAttr
                    .set(k, "\"" + _this.makeFormat(v) + "\"");
            }
        });
        return oNodeInfo;
    };
    MakeWeapp.prototype.formatStart = function (sInput, sLeft, sRight) {
        if (sInput.startsWith("@")) {
            sInput = sInput.substr(1);
        }
        else {
            sInput = sLeft + sInput + sRight;
        }
        return sInput;
    };
    MakeWeapp.prototype.processBaseAttr = function (oNodeInfo) {
        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .nodeAttr
                .set(index_2.TBase.defineData().startHref + index_2.TBase.defineData().nameUrl, oNodeInfo.nodeAttr.get("href"));
        }
        if (oNodeInfo.nodeAttr.has("src")) {
            if (oNodeInfo.nodeName === "img" || oNodeInfo.nodeName === "iframe") {
                var sVal = oNodeInfo
                    .nodeAttr
                    .get("src");
                if (sVal.indexOf(index_2.TBase.defineBase().regexOutBegin) > -1) {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri: " + sVal + "}");
                }
                else if (sVal.startsWith('http')) {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri:'" + sVal + "'}");
                }
                else {
                    oNodeInfo
                        .itemAttr
                        .set("source", "require('" + sVal + "')");
                }
            }
        }
        if (oNodeInfo.nodeAttr.has("onclick")) {
            oNodeInfo
                .nodeAttr
                .set(index_2.TBase.defineData().startOn + index_2.TBase.defineData().nameClick, oNodeInfo.nodeAttr.get("onclick"));
        }
    };
    MakeWeapp.prototype.processBaseForm = function (oNodeInfo) {
        if (oNodeInfo.sourceName) {
            if (oNodeInfo.sourceType.startsWith('form')) {
            }
        }
    };
    MakeWeapp.prototype.subFormat = function (eKey, sValue) {
        var sReturn = "";
        switch (eKey) {
            case enumer_1.AEnumRegexKey.state:
                sReturn = "{this.state." + sValue + "}";
                break;
            case enumer_1.AEnumRegexKey.item:
                if (sValue.startsWith("@")) {
                    sReturn = "{{item." + sValue.substr(1) + "}}";
                }
                else {
                    sReturn = "{{item." + sValue + "}}";
                }
                break;
            case enumer_1.AEnumRegexKey.env:
                sReturn = "{" + sValue + "}";
                break;
        }
        return sReturn;
    };
    MakeWeapp.prototype.attrTemplate = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameCall:
                        oNodeInfo.nodeInfo = "{this.x_template_render_" + v + "(" + mMap.get(index_2.TBase.defineData().nameRecord) + ")}";
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameRender:
                        var oSource = index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startSource);
                        oNodeInfo.nodeInfo = '<block wx:for="{{' + oSource.get(index_2.TBase.defineData().nameState) + '}}"><template is="' + v + '" data="{{item}}"/></block>';
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameFooter:
                        oNodeInfo
                            .itemAttr
                            .set("ListFooterComponent", "() =>{return this.x_template_render_" + v + "()}");
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameEmpty:
                        oNodeInfo
                            .itemAttr
                            .set("ListEmptyComponent", "() =>{return this.x_template_render_" + v + "()}");
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.attrProp = function (oNodeInfo, mMap) {
        var _this = this;
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, _this.formatStart(v, '', ''));
            });
        }
    };
    MakeWeapp.prototype.attrNumber = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, v);
            });
        }
    };
    MakeWeapp.prototype.attrForm = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameLabel:
                    case index_2.TBase.defineData().nameArrow:
                        oNodeInfo.contentBefore = '<view class="th_form_item"><label>' + v + "</label>";
                        oNodeInfo.contentAfter = "</view>";
                        break;
                }
            });
        }
    };
    MakeWeapp.prototype.attrStyle = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, 'styles.' + v);
            });
        }
    };
    MakeWeapp.prototype.attrState = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, 'this.state.' + v);
            });
        }
    };
    MakeWeapp.prototype.attrHref = function (oNodeInfo, mMap) {
        var _this = this;
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameUrl:
                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(this," + _this.formatStart(v, '"', '"') + ")}");
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameNavigation:
                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(navigation," + _this.formatStart(v, '"', '"') + ")}");
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.attrBind = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameChange:
                        oNodeInfo.itemAttr.set('onChange', "(value)=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameClick:
                        oNodeInfo.itemAttr.set('onClick', "()=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().namePress:
                        oNodeInfo.itemAttr.set('bindtap', v);
                        break;
                    case index_2.TBase.defineData().nameCancel:
                        oNodeInfo.itemAttr.set('onCancel', "(value)=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameEnd:
                        oNodeInfo.itemAttr.set('onEndReached', "()=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameRefresh:
                        oNodeInfo.itemAttr.set('onRefresh', "()=>{" + v + "}");
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.attrOn = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameChange:
                        oNodeInfo.itemAttr.set('onChange', "(value)=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameClick:
                        oNodeInfo.itemAttr.set('onClick', "()=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().namePress:
                        oNodeInfo.itemAttr.set('onPress', "()=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameCancel:
                        oNodeInfo.itemAttr.set('onCancel', "(value)=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameEnd:
                        oNodeInfo.itemAttr.set('onEndReached', "()=>{" + v + "}");
                        break;
                    case index_2.TBase.defineData().nameRefresh:
                        oNodeInfo.itemAttr.set('onRefresh', "()=>{" + v + "}");
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.attrSource = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameState:
                        oNodeInfo
                            .itemAttr
                            .set("data", "this.state." + v);
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameOption:
                        oNodeInfo
                            .itemAttr
                            .set("data", v);
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.attrExec = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameStyle:
                        oNodeInfo
                            .itemAttr
                            .set("style", v);
                        break;
                }
                ;
            });
        }
    };
    MakeWeapp.prototype.subBank = function () {
        return new weapp_1.BankWeapp();
    };
    MakeWeapp.prototype.subPageOut = function (oPageOut) {
        if (oPageOut.config.headerLeft) {
            oPageOut
                .templates
                .forEach(function (fItem) {
                if (fItem.name === oPageOut.config.headerLeft) {
                    oPageOut.config.headerLeft = fItem.content;
                }
            });
        }
        ;
        if (oPageOut.config.headerRight) {
            oPageOut
                .templates
                .forEach(function (fItem) {
                if (fItem.name === oPageOut.config.headerRight) {
                    oPageOut.config.headerRight = fItem.content;
                }
            });
        }
        ;
        return oPageOut;
    };
    return MakeWeapp;
}(make_1.FatherMake));
exports.MakeWeapp = MakeWeapp;
