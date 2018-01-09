import {IHtmlElementList} from './../../air/interfaces/html';
import {IJobBank} from '../../air/interfaces/job';

const elementList : IHtmlElementList = {

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
        attrDefault:{
            "type":'"primary"'
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

    select_formpicker:{

        name:"Picker",

        attrDefault:{
            "cols":'1'
        }
    },

    input_forminput:{
        name: "InputItem"
    },

    input_formdate:{
        name: "DatePicker"
    },

    


    span: {
        name: "Text"
    },
    img:{
        name:"Image"
    }
}

export class BankNative implements IJobBank {

    upElementList() {
        return elementList;
    }
}
