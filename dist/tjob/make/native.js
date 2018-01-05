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
var MakeNative = /** @class */ (function (_super) {
    __extends(MakeNative, _super);
    function MakeNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeNative.prototype.subWorkType = function () {
        return index_1.TBase
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
        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo
                .itemAttr
                .set("onPress", "()=>{guidebook.navigateUrl(this,\"" + oNodeInfo.nodeAttr.get("href") + "\")}");
        }
        this.attrTemplate(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startTemplate));
        this.attrSource(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startSource));
        this.attrProp(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startProp));
        this.attrStyle(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startStyle));
        this.attrProp(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startIcon));
        this.attrNumber(oNodeInfo, index_1.TCoreHelperMap.upChildrenMap(oNodeInfo.nodeAttr, index_1.TBase.defineData().startNumber));
        oNodeInfo
            .itemAttr
            .forEach(function (v, k) {
            oNodeInfo
                .itemAttr
                .set(k, "{" + v + "}");
        });
        return oNodeInfo;
    };
    MakeNative.prototype.subFormat = function (eKey, sValue) {
        var sReturn = "";
        switch (eKey) {
            case enumer_1.AEnumRegexKey.state:
                sReturn = "{this.state." + sValue + "}";
                break;
            case enumer_1.AEnumRegexKey.item:
                sReturn = "{item." + sValue + "}";
                break;
        }
        return sReturn;
    };
    MakeNative.prototype.attrTemplate = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_1.TBase
                        .defineData()
                        .nameCall:
                        oNodeInfo.nodeInfo = "{this.x_template_render_" + v + "(" + mMap.get(index_1.TBase.defineData().nameRecord) + ")}";
                        break;
                    case index_1.TBase
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
    MakeNative.prototype.attrStyle = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                oNodeInfo
                    .itemAttr
                    .set(k, 'styles.' + v);
            });
        }
    };
    MakeNative.prototype.attrSource = function (oNodeInfo, mMap) {
        if (mMap.size > 0) {
            mMap.forEach(function (v, k) {
                switch (k) {
                    case index_1.TBase
                        .defineData()
                        .nameState:
                        oNodeInfo
                            .itemAttr
                            .set("data", "this.state." + v);
                        break;
                    case index_1.TBase.defineData().nameOption:
                        oNodeInfo
                            .itemAttr
                            .set("options", v);
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
            oPageOut.templates.forEach(function (fItem) {
                if (fItem.name === oPageOut.config.headerLeft) {
                    oPageOut.config.headerLeft = fItem.content;
                }
            });
        }
        ;
        if (oPageOut.config.headerRight) {
            oPageOut.templates.forEach(function (fItem) {
                if (fItem.name === oPageOut.config.headerRight) {
                    oPageOut.config.headerRight = fItem.content;
                }
            });
        }
        ;
        return oPageOut;
    };
    return MakeNative;
}(make_1.FatherMake));
exports.MakeNative = MakeNative;
