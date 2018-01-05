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
}

export class BankNative implements IJobBank {

    upElementList() {
        return elementList;
    }
}
