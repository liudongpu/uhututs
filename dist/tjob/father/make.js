"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var FatherMake = /** @class */ (function () {
    function FatherMake() {
    }
    FatherMake.prototype.makeElement = function (oNodeInfo) {
        var mElement = index_1.TCoreHelperMap.parseMap(this.subElementTrans());
        var oInfo = mElement.get(oNodeInfo.nodeName);
        oNodeInfo.itemName = oInfo.name;
        this.subElementParse(oNodeInfo);
        return oNodeInfo;
    };
    return FatherMake;
}());
exports.FatherMake = FatherMake;
