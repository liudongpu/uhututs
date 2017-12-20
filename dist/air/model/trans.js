"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transNative = {
    div: {
        name: "View",
        typeName: {
            "scroll": "ScrollView"
        }
    },
    a: {
        name: "TouchableOpacity"
    },
    input: {
        name: "input"
    }
};
var AModelTrans = /** @class */ (function () {
    function AModelTrans() {
    }
    AModelTrans.upNative = function () {
        return transNative;
    };
    return AModelTrans;
}());
exports.AModelTrans = AModelTrans;
