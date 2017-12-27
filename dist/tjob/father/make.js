"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var FatherMake = /** @class */ (function () {
    function FatherMake() {
    }
    FatherMake.prototype.makeElement = function (oNodeInfo) {
        var mElement = index_1.TCoreHelperMap.parseMap(this.subBank().upElementList());
        var oInfo = mElement.get(oNodeInfo.nodeName);
        oNodeInfo.itemName = oInfo.name;
        this.subElementParse(oNodeInfo);
        return oNodeInfo;
    };
    FatherMake.prototype.makeResult = function (oPageOut, fileInfo) {
        if (oPageOut.config === undefined) {
            oPageOut.config = this.subPageConfig("{}", fileInfo);
        }
        return oPageOut;
    };
    return FatherMake;
}());
exports.FatherMake = FatherMake;
