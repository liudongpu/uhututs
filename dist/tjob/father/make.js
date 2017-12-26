"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tcore/index");
var index_2 = require("../../tnode/index");
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
            oPageOut.config = index_1.TCoreHelperObject.parseTs({});
        }
        if (oPageOut.config) {
            if (index_1.TCoreHelperString.isEmpty(oPageOut.config.macroUrl)) {
                oPageOut.config.macroUrl = "dev/resources/macro/" + this.subWorkType() + ".mustache";
            }
            else {
                oPageOut.config.macroUrl = index_2.TNodeIoFile.pathNormalize(index_2.TNodeIoFile.pathJoin(index_2.TNodeIoFile.parentPath(fileInfo.path), oPageOut.config.macroUrl));
            }
        }
        return oPageOut;
    };
    return FatherMake;
}());
exports.FatherMake = FatherMake;
