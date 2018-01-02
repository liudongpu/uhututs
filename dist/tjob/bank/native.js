const elementList = {
    div: {
        name: "View"
    },
    object: {
        name: "View",
        typeName: {
            "scroll": "ScrollView",
            "list": "FlatList"
        }
    },
    a: {
        name: "TouchableOpacity"
    },
    input: {
        name: "TextInput"
    },
    span: {
        name: "Text"
    }
};
export class BankNative {
    upElementList() {
        return elementList;
    }
}
