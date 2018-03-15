"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelperDate = /** @class */ (function () {
    function HelperDate() {
    }
    HelperDate.stringToDate = function (sString) {
        return new Date(Date.parse((sString.replace(/-/g, "/"))));
    };
    return HelperDate;
}());
exports.HelperDate = HelperDate;
