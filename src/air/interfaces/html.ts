import { IbaseKv } from "./base";



 export interface IHtmlElementInfo{
    name:string

    typeName?:IbaseKv
}

export interface IHtmlElementList{

    div:IHtmlElementInfo

    object:IHtmlElementInfo

    a:IHtmlElementInfo

    button:IHtmlElementInfo

    i:IHtmlElementInfo

    input:IHtmlElementInfo

    main:IHtmlElementInfo

    span:IHtmlElementInfo
}



