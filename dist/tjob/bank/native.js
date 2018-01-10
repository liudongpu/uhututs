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
        name: "MaterialCommunityIcons"
    },
    object: {
        name: "View"
    },
    object_qrcode: {
        name: "QRCode"
    },
    button: {
        name: "Button",
        attrDefault: {
            "type": '"primary"'
        }
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
    select_formpicker: {
        name: "Picker",
        attrDefault: {
            "cols": '1'
        }
    },
    input_forminput: {
        name: "InputItem"
    },
    textarea_formtextarea: {
        name: "TextareaItem"
    },
    input_formdate: {
        name: "DatePicker"
    },
    span: {
        name: "Text"
    },
    img: {
        name: "Image"
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
