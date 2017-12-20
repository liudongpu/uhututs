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

export class AModelTrans {

    static upNative() {
        return transNative;
    }
}
