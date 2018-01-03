"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementList = {
    div: {
        name: "View"
    },
    main: {
        name: "View"
    },
    i: {
        name: "Icon"
    },
    object: {
        name: "View",
        typeName: {
            "scroll": "ScrollView",
            "list": "FlatList",
            "qrcode": "QRCode"
        }
    },
    button: {
        name: "TouchableOpacity"
    },
    a: {
        name: "TouchableOpacity"
    },
    input: {
        name: "TextInput",
        typeName: {
            "search": "SearchBar"
        }
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
