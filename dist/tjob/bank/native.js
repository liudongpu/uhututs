"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elementList = {
    div: {
        name: "View",
        sourceImport: [{ name: "{View}", from: "react-native" }]
    },
    div_scroll: {
        name: "ScrollView",
        sourceImport: [{ name: "{ScrollView}", from: "react-native" }]
    },
    div_list: {
        name: "FlatList",
        sourceImport: [{ name: "{FlatList}", from: "react-native" }, { name: "{RefreshControl}", from: "react-native" }]
    },
    div_form: {
        name: "List",
        sourceImport: [{ name: "{ListView}", from: "react-native" }]
    },
    main: {
        name: "View",
        sourceImport: [{ name: "{View}", from: "react-native" }]
    },
    i: {
        name: "Icon",
        sourceImport: [{ name: "Icon", from: "react-native-vector-icons" }]
    },
    object: {
        name: "View",
        sourceImport: [{ name: "{View}", from: "react-native" }]
    },
    object_qrcode: {
        name: "QRCode",
        sourceImport: [{ name: "QRCode", from: "react-native-qrcode" }]
    },
    button: {
        name: "Button",
        attrDefault: {
            "type": '"primary"'
        }
    },
    a: {
        name: "TouchableOpacity",
        sourceImport: [{ name: "{TouchableOpacity}", from: "react-native" }]
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
        name: "Text",
        sourceImport: [{ name: "{Text}", from: "react-native" }]
    },
    img: {
        name: "Image",
        sourceImport: [{ name: "{Image}", from: "react-native" }]
    },
    iframe: {
        name: "WebView",
        sourceImport: [{ name: "{WebView}", from: "react-native" }]
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
