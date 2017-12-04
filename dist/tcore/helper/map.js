"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = (function () {
    function default_1() {
    }
    default_1.stringIsEmpty = function (cs) {
        return cs == undefined || cs == null || cs.length == 0;
    };
    default_1.objectToMap = function (oAttr) {
        var mMap = new Map();
        for (var k in oAttr) {
            mMap.set(k, oAttr[k]);
        }
        return mMap;
    };
    default_1.mapToObject = function (oMap) {
        var oReturn = {};
        oMap.forEach(function (v, k) { return oReturn[k] = v; });
        return oReturn;
    };
    default_1.stringToObject = function (sParm) {
        return this.mapToObject(this.stringToMap(sParm));
    };
    default_1.stringToMapArray = function (sParm) {
        var oMap = this.stringToMap(sParm);
        var aItems = [];
        oMap.forEach(function (v, k) {
            aItems.push({ key: k, value: v });
        });
        return aItems;
    };
    default_1.stringToMap = function (sParm) {
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
    default_1.formatMapbyObject = function (oObject, sPropName) {
        var oMap = new Map();
        if (oObject.hasOwnProperty(sPropName)) {
            for (var sKey in oObject[sPropName]) {
                var sVal = oObject[sPropName][sKey];
                oMap.set(sKey, sVal);
            }
        }
        return oMap;
    };
    default_1.mapAssign = function (oTarget, oSource) {
        oSource.forEach(function (v, k) {
            oTarget.set(k, v);
        });
        return oTarget;
    };
    default_1.stringToSet = function (sString) {
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
    default_1.setToString = function (oSet) {
        var aString = [];
        oSet.forEach(function (f) { return aString.push(f); });
        return aString.join(',');
    };
    return default_1;
}());
exports.default = default_1;
