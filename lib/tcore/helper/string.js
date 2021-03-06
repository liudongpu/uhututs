export class HelperString {
    static isEmpty(cs) {
        return cs == undefined || cs == null || cs.length == 0;
    }
    static formatString(sString, oArgs) {
        var result = sString;
        if (oArgs != undefined) {
            if (oArgs instanceof Array) {
                for (var i = 0; i < oArgs.length; i++) {
                    if (oArgs[i] != undefined) {
                        //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                        var reg = new RegExp("\\{" + i + "\\}", "g");
                        result = result.replace(reg, oArgs[i]);
                    }
                }
            }
            else if (typeof (oArgs) == "string") {
                result = result.replace(/\{0\}/g, oArgs);
            }
            else if (typeof (oArgs) == "object") {
                for (var key in oArgs) {
                    if (oArgs[key] != undefined) {
                        var reg = new RegExp("(\\{" + key + "\\})", "g");
                        result = result.replace(reg, oArgs[key]);
                    }
                }
            }
        }
        return result;
    }
    /**
     *
     *
     * @param str
     * @param separator
     * @returns
     */
    static substringAfterLast(str, separator) {
        if (this.isEmpty(str)) {
            return str;
        }
        if (this.isEmpty(separator)) {
            return this.temp.EMPTY;
        }
        var pos = str.lastIndexOf(separator);
        if (pos == this.temp.INDEX_NOT_FOUND || pos == str.length - separator.length) {
            return this.temp.EMPTY;
        }
        return str.substring(pos + separator.length);
    }
    static substringAfter(str, separator) {
        if (this.isEmpty(str)) {
            return str;
        }
        if (this.isEmpty(separator)) {
            return this.temp.EMPTY;
        }
        var pos = str.indexOf(separator);
        if (pos == this.temp.INDEX_NOT_FOUND || pos == str.length - separator.length) {
            return this.temp.EMPTY;
        }
        return str.substring(pos + separator.length);
    }
    static contains(seq, searchSeq) {
        return seq.indexOf(searchSeq) > this.temp.INDEX_NOT_FOUND;
    }
    static split(source) {
        return source.split(',');
    }
    static containsOfArrayString(source, searchofArray) {
        let bReturn = false;
        let aArr = this.split(searchofArray);
        aArr.forEach(fItem => {
            if (source.indexOf(fItem) > -1) {
                bReturn = true;
            }
        });
        return bReturn;
    }
    /**
     *
     * @param sInString
     * @param sStart
     * @param sEnd
     * @param sWith
     * @param fRemove 标记是否将Start和end去掉
     */
    static replaceBetween(sInString, sStart, sEnd, sWith, fRemove) {
        // var reg=new
        // RegExp("("+sStart.replace('/','\/')+")[\s\S]*?("+sEnd.replace('/','\/')+")","
        // g m");
        // console.log(/(\/\/UhutuIncCodeClassAutoBegin)*?(\/\/UhutuIncCodeClassAutoEnd)
        // / gm.test(sInString));
        // console.log(reg.test("//UhutuIncCodeClassAutoBegin//UhutuIncCodeClassAutoEnd"
        // ) );
        var reg = new RegExp('(' + sStart + ')(.|\s|\S|\n)*?(' + sEnd + ')', 'gm');
        //console.log(reg.test(sInString));
        return sInString.replace(reg, (fRemove
            ? ''
            : sStart) + sWith + (fRemove
            ? ''
            : sEnd));
    }
    /**
     *
     *
     * @param sInString 输入字符串
     * @param sStart 开始标记
     * @param sEnd 结束标记
     * @param sWith 中间文本内容
     * @param sAfter 如果不存在则插入 插入在该字符串之后  如果为空 则添加到末尾
     */
    static reaplaceBig(sInString, sStart, sEnd, sWith, sAfter) {
        var sReturn = sInString;
        if (sReturn.indexOf(sStart) > -1) {
            sReturn = this.replaceBetween(sInString, sStart, sEnd, sWith, false);
        }
        else {
            if (this.isEmpty(sAfter)) {
                sReturn = sReturn + sStart + sWith + sEnd;
            }
            else {
                var reg = new RegExp('(' + sAfter + ')', 'gm');
                sReturn = sReturn.replace(reg, "$1" + sStart + sWith + sEnd);
            }
        }
        return sReturn;
    }
    static upSpace(iNumber) {
        var aStr = [];
        for (var i = 0; i < iNumber; i++) {
            aStr.push(' ');
        }
        return aStr.join('');
    }
    /**
     *
     *
     * @param {any} sInString 输入字符串
     * @param {any} sReplace 替换源字符串
     * @param {any} sWith 替换为字符串
     * @returns
     *
     * @memberOf Mexport
     */
    static replaceAll(sInString, sReplace, sWith) {
        var sReturn = sInString.replace(new RegExp(sReplace, 'gm'), sWith);
        return sReturn;
    }
    static subStringBeforeLast(sInString, sAfter) {
        let aArr = sInString.split(sAfter);
        if (aArr.length > 1) {
            aArr.splice(aArr.length - 1, 1);
        }
        return aArr.join(sAfter);
    }
}
HelperString.temp = {
    EMPTY: "",
    INDEX_NOT_FOUND: -1
};
;
