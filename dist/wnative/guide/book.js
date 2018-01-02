"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.navigateUrl = function (that, sUrl) {
        that.props.navigation.navigate(sUrl);
    };
    return Book;
}());
var GuideBook = new Book();
exports.GuideBook = GuideBook;
