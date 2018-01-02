import {IGuideBook} from "../../air/interfaces/guide";

class Book {

    navigateUrl(that,sUrl:string) {


        that.props.navigation.navigate(sUrl);

    }

}

const GuideBook = new Book();

export {GuideBook};