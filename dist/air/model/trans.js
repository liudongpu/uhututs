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
var AmodelTrans = /** @class */ (function () {
    function AmodelTrans() {
    }
    AmodelTrans.upNative = function () {
        return transNative;
    };
    return AmodelTrans;
}());
exports.AmodelTrans = AmodelTrans;
