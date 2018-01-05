import { IHtmlElementInfo } from './html';
import { IbaseKv } from "./base";



 export interface IHtmlElementInfo{
    name:string

    typeName?:IbaseKv
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

    input_date:IHtmlElementInfo

    main:IHtmlElementInfo

    span:IHtmlElementInfo
}



