"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementList = {
    div: {
        name: "View"
    },
    div_scroll: {
        name: "ScrollView"
    },
    div_list: {
        name: "FlatList"
    },
    main: {
        name: "View"
    },
    i: {
        name: "Icon"
    },
    object: {
        name: "View"
    },
    object_qrcode: {
        name: "QRCode"
    },
    button: {
        name: "TouchableOpacity"
    },
    a: {
        name: "TouchableOpacity"
    },
    select: {
        name: "ModalDropdown"
    },
    input: {
        name: "TextInput"
    },
    input_text: {
        name: "TextInput"
    },
    input_search: {
        name: "SearchBar"
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
