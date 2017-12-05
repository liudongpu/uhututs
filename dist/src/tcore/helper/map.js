"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelperMap = /** @class */ (function () {
    function HelperMap() {
    }
    HelperMap.stringIsEmpty = function (cs) {
        return cs == undefined || cs == null || cs.length == 0;
    };
    HelperMap.objectToMap = function (oAttr) {
        var mMap = new Map();
        for (var k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    };
    HelperMap.mapToObject = function (oMap) {
        var oReturn = {};
        oMap.forEach(function (v, k) { return oReturn[k] = v; });
        return oReturn;
    };
    HelperMap.stringToObject = function (sParm) {
        return this.mapToObject(this.stringToMap(sParm));
    };
    HelperMap.stringToMapArray = function (sParm) {
        var oMap = this.stringToMap(sParm);
        var aItems = [];
        oMap.forEach(function (v, k) {
            aItems.push({ key: k, value: v });
        });
        return aItems;
    };
    HelperMap.stringToMap = function (sParm) {
        var _this = this;
        var oReturn = new Map();
        if (sParm)
            sParm.split('&').forEach(function (fItem) {
                if (!_this.stringIsEmpty(fItem)) {
                    var sKey = fItem.split('=')[0];
                    var sValue = fItem.substr(sKey.length + 1);
                    oReturn.set(sKey, sValue);
                }
            });
        return oReturn;
    };
    HelperMap.formatMapbyObject = function (oObject, sPropName) {
        var oMap = new Map();
        if (oObject.hasOwnProperty(sPropName)) {
            for (var sKey in oObject[sPropName]) {
                var sVal = oObject[sPropName][sKey];
                oMap.set(sKey, sVal);
            }
        }
        return oMap;
    };
    HelperMap.mapAssign = function (oTarget, oSource) {
        oSource.forEach(function (v, k) {
            oTarget.set(k, v);
        });
        return oTarget;
    };
    HelperMap.stringToSet = function (sString) {
        var oSet = new Set();
        if (sString != undefined && sString != null) {
            sString
                .split(',')
                .forEach(function (s) {
                if (s != '') {
                    oSet.add(s);
                }
            });
        }
        ;
        return oSet;
    };
    HelperMap.setToString = function (oSet) {
        var aString = [];
        oSet.forEach(function (f) { return aString.push(f); });
        return aString.join(',');
    };
    return HelperMap;
}());
exports.HelperMap = HelperMap;
