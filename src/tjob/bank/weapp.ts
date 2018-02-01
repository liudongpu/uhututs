import {IHtmlElementList} from './../../air/interfaces/html';
import {IJobBank} from '../../air/interfaces/job';

const elementList : IHtmlElementList = {

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

        name: "button"
    },

    a: {
        name: "TouchableOpacity"
    },

    select: {

        name: "ModalDropdown"
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

    select_formpicker:{

        name:"Picker",

        attrDefault:{
            "cols":'1'
        }
    },

    input_forminput:{
        name: "input"
    },

    textarea_formtextarea:{
        name: "input"
    },

    input_formdate:{
        name: "input"
    },

    


    span: {
        name: "text"
    },
    img:{
        name:"image"
    },
    iframe:{
        name:"WebView"
    }
}

export class BankWeapp implements IJobBank {

    upElementList() {
        return elementList;
    }
}
