import { IHtmlElementList } from './../../air/interfaces/html';
import { IJobBank } from '../../air/interfaces/job';

const elementList : IHtmlElementList = {

    div: {
        name: "View"
    },
    main: {
        name: "View"
    },
    i: {
        name: "Icon"
    },

    object:{
        name: "View",
        typeName: {
            "scroll": "ScrollView",
            "list":"FlatList",

            "qrcode":"QRCode"
        }
    },

    button:{

        name:"TouchableOpacity"
    },

    a: {
        name: "TouchableOpacity"
    },

    select:{

        name:"ModalDropdown"
    },

    input: {
        name: "TextInput",
        typeName:{
            "search":"SearchBar"
        }
    },

    span:{
        name:"Text"
    }
}

export class BankNative implements IJobBank {

     upElementList() {
        return elementList;
    }
}
