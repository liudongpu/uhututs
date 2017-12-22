import { IbaseKv } from "./base";



 export interface IhtmlElementInfo{
    name:string

    typeName?:IbaseKv
}

export interface IhtmlElementList{

    div:IhtmlElementInfo

    a:IhtmlElementInfo

    input:IhtmlElementInfo

    span:IhtmlElementInfo
}



