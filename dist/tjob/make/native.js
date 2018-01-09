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
var native_1 = require("../bank/native");
var index_2 = require("../../tdaemon/index");
var MakeNative = /** @class */ (function (_super) {
    __extends(MakeNative, _super);
    function MakeNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeNative.prototype.subWorkType = function () {
        return index_2.TBase
            .defineBase()
            .workNative;
    };
    MakeNative.prototype.subPageConfig = function (sJson, fileInfo) {
        var oDefaultConfig = index_1.TCoreHelperObject.parseTs({
            macroUrl: "dev/resources/macro/" + this.subWorkType() + ".mustache",
            pageTitle: '',
            styleUrl: './' + fileInfo.name + '-style'
        });
        return index_1.TCoreHelperObject.assign(oDefaultConfig, index_1.TCoreCommonFunc.jsonParse(sJson));
    };
    MakeNative.prototype.subElementParse = function (oNodeInfo) {
        var _this = this;
        if (oNodeInfo.sourceClass != undefined) {
            var aClass = oNodeInfo
                .sourceClass
                .split(' ');
            var aStyles_1 = [];
            aClass.forEach(function (fItem) {
                if (fItem) {
                    if (fItem.startsWith("tg_")) {
                        aStyles_1.push('styletg.' + fItem);
                    }
                    else {
                        aStyles_1.push('styles.' + fItem);
                    }
                }
            });
            oNodeInfo
                .itemAttr
                .set("style", "[" + aStyles_1.join(",") + "]");
        }
        this.processBaseAttr(oNodeInfo);
        this.processBaseForm(oNodeInfo);
        this.attrTemplate(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startTemplate));
        this.attrSource(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startSource));
        this.attrProp(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startProp));
        this.attrStyle(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startStyle));
        this.attrProp(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startIcon));
        this.attrHref(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startHref));
        this.attrNumber(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startNumber));
        this.attrForm(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startForm));
        this.attrOn(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_2.TBase.defineData().startOn));
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
                    .set(k, "{" + _this.makeFormat(v) + "}");
            }
        });
        return oNodeInfo;
    };
    MakeNative.prototype.processBaseAttr = function (oNodeInfo) {
        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .nodeAttr
                .set(index_2.TBase.defineData().startHref + index_2.TBase.defineData().nameUrl, oNodeInfo.nodeAttr.get("href"));
        }
        if (oNodeInfo.nodeAttr.has("src")) {
            if (oNodeInfo.nodeName === "img") {
                var sVal = oNodeInfo
                    .nodeAttr
                    .get("src");
                if (sVal.indexOf(index_2.TBase.defineBase().regexOutBegin) > -1) {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri: " + sVal + "}");
                }
                else {
                    oNodeInfo
                        .itemAttr
                        .set("source", "{uri: '" + sVal + "'}");
                }
            }
        }
        if (oNodeInfo.nodeAttr.has("onclick")) {
            oNodeInfo
                .nodeAttr
                .set(index_2.TBase.defineData().startOn + index_2.TBase.defineData().nameClick, oNodeInfo.nodeAttr.get("onclick"));
        }
    };
    MakeNative.prototype.processBaseForm = function (oNodeInfo) {
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
    };
    MakeNative.prototype.subFormat = function (eKey, sValue) {
        var sReturn = "";
        switch (eKey) {
            case enumer_1.AEnumRegexKey.state:
                sReturn = "{this.state." + sValue + "}";
                break;
            case enumer_1.AEnumRegexKey.item:
                if (sValue.startsWith("@")) {
                    sReturn = "item." + sValue.substr(1) + "";
                }
                else {
                    sReturn = "{item." + sValue + "}";
                }
                break;
        }
        return sReturn;
    };
    MakeNative.prototype.attrTemplate = function (oNodeInfo, mMap) {
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
                        oNodeInfo
                            .itemAttr
                            .set("renderItem", "({item}) =>{return this.x_template_render_" + v + "(item)}");
                        break;
                }
                ;
            });
        }
    };
    MakeNative.prototype.attrProp = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, '"' + v + '"');
            });
        }
    };
    MakeNative.prototype.attrNumber = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, v);
            });
        }
    };
    MakeNative.prototype.attrForm = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameLabel:
                        oNodeInfo.nodeInfo = v;
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameArrow:
                        oNodeInfo.nodeInfo = '<List.Item arrow="horizontal">' + v + '</List.Item>';
                        break;
                }
            });
        }
    };
    MakeNative.prototype.attrStyle = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, 'styles.' + v);
            });
        }
    };
    MakeNative.prototype.attrHref = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameUrl:
                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(this,\"" + v + "\")}");
                        break;
                    case index_2.TBase
                        .defineData()
                        .nameNavigation:
                        oNodeInfo
                            .itemAttr
                            .set("onPress", "()=>{guidebook.navigateUrl(navigation,\"" + v + "\")}");
                        break;
                }
                ;
            });
        }
    };
    MakeNative.prototype.attrOn = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_2.TBase
                        .defineData()
                        .nameChange:
                        if (v === '') { }
                        break;
                    case index_2.TBase.defineData().nameClick:
                        oNodeInfo.itemAttr.set('onClick', "()=>{" + v + "}");
                        break;
                }
                ;
            });
        }
    };
    MakeNative.prototype.attrSource = function (oNodeInfo, mMap) {
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
    MakeNative.prototype.subBank = function () {
        return new native_1.BankNative();
    };
    MakeNative.prototype.subPageOut = function (oPageOut) {
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
        if (oPageOut.imports.length > 0) {
            oPageOut.imports.forEach(function (fItem) {
                fItem.name = "{" + fItem.name + "}";
            });
        }
        return oPageOut;
    };
    return MakeNative;
}(make_1.FatherMake));
exports.MakeNative = MakeNative;
