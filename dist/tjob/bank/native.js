"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementList = {
    div: {
        name: "View"
    },
    main: {
        name: "View"
    },
    object: {
        name: "View",
        typeName: {
            "scroll": "ScrollView",
            "list": "FlatList"
        }
    },
    button: {
        name: "TouchableOpacity"
    },
    a: {
        name: "TouchableOpacity"
    },
    input: {
        name: "TextInput"
    },
    span: {
        name: "Text"
    }
};
var BankNative = /** @class */ (function () {
    function BankNative() {
    }
    BankNative.prototype.upElementList = function () {
        return elementList;
    };
    return BankNative;
}());
exports.BankNative = BankNative;
