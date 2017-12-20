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
var trans_1 = require("../../air/model/trans");
var make_1 = require("../father/make");
var MakeNative = /** @class */ (function (_super) {
    __extends(MakeNative, _super);
    function MakeNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeNative.prototype.subElementParse = function (oNodeInfo) {
        return oNodeInfo;
    };
    MakeNative.prototype.subElementTrans = function () {
        return trans_1.AModelTrans.upNative();
    };
    return MakeNative;
}(make_1.FatherMake));
exports.MakeNative = MakeNative;
