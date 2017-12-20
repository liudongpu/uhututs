import {IhtmlElementList} from "../interfaces/html";

const transNative : IhtmlElementList = {

    div: {
        name: "View",
        typeName: {
            "scroll": "ScrollView"
        }
    },

    a: {
        name: "TouchableOpacity"
    },

    input: {
        name: "input"
    }
}

export class AmodelTrans {

    static upNative() {
        return transNative;
    }
}
