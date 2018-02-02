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
        name: "form"
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
        name: "button"
    },
    a: {
        name: "TouchableOpacity"
    },
    select: {
        name: "picker"
    },
    input: {
        name: "input"
    },
    input_text: {
        name: "input"
    },
    input_search: {
        name: "input"
    },
    select_formpicker: {
        name: "picker",
        attrDefault: {
            "cols": '1'
        }
    },
    input_forminput: {
        name: "input"
    },
    textarea_formtextarea: {
        name: "textarea"
    },
    input_formdate: {
        name: "picker",
        attrDefault: {
            "mode": 'date'
        }
    },
    span: {
        name: "text"
    },
    img: {
        name: "image"
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
