import { IHtmlElementList } from './../../air/interfaces/html';
import { IJobBank } from '../../air/interfaces/job';

const elementList : IHtmlElementList = {

    div: {
        name: "View"
    },

    object:{
        name: "View",
        typeName: {
            "scroll": "ScrollView",
            "list":"FlatList"
        }
    },

    a: {
        name: "TouchableOpacity"
    },

    input: {
        name: "TextInput"
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
