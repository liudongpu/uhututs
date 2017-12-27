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
var make_1 = require("../father/make");
var index_1 = require("../../tcore/index");
var native_1 = require("../bank/native");
var MakeNative = /** @class */ (function (_super) {
    __extends(MakeNative, _super);
    function MakeNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeNative.prototype.subWorkType = function () {
        return index_1.TBase.defineBase().workNative;
    };
    MakeNative.prototype.subElementParse = function (oNodeInfo) {
        if (oNodeInfo.sourceClass != undefined) {
        }
        if (oNodeInfo.nodeAttr.has("href")) {
            oNodeInfo.itemAttr.set("onPress", "()=>{}");
        }
        oNodeInfo.itemAttr.forEach(function (v, k) {
            oNodeInfo.itemAttr.set(k, "{" + v + "}");
        });
        return oNodeInfo;
    };
    MakeNative.prototype.subBank = function () {
        return new native_1.BankNative();
    };
    return MakeNative;
}(make_1.FatherMake));
exports.MakeNative = MakeNative;
