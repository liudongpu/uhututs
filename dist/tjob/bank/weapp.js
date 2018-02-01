"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementList = {
    div: {
        name: "view"
    },
    div_scroll: {
        name: "view"
    },
    div_list: {
        name: "view"
    },
    div_form: {
        name: "List"
    },
    main: {
        name: "view"
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
        name: "text"
    },
    img: {
        name: "Image"
    },
    iframe: {
        name: "WebView"
    }
};
var BankWeapp = /** @class */ (function () {
    function BankWeapp() {
    }
    BankWeapp.prototype.upElementList = function () {
        return elementList;
    };
    return BankWeapp;
}());
exports.BankWeapp = BankWeapp;
