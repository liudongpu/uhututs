import { IHtmlElementInfo } from './html';
import { IbaseKv } from "./base";



 export interface IHtmlElementInfo{
    name:string

    typeName?:IbaseKv




    attrDefault?:IbaseKv

}

export interface IHtmlElementList{

    div:IHtmlElementInfo


    div_scroll:IHtmlElementInfo

    div_list:IHtmlElementInfo

    object:IHtmlElementInfo

    object_qrcode:IHtmlElementInfo

    a:IHtmlElementInfo

    button:IHtmlElementInfo

    i:IHtmlElementInfo

    select:IHtmlElementInfo

    input:IHtmlElementInfo

    input_text:IHtmlElementInfo
    input_search:IHtmlElementInfo

    input_formdate:IHtmlElementInfo


    input_forminput:IHtmlElementInfo

    select_formpicker:IHtmlElementInfo


    textarea_formtextarea:IHtmlElementInfo

    main:IHtmlElementInfo

    span:IHtmlElementInfo


    img:IHtmlElementInfo
}



