import { IHtmlElementList } from './html';
import { IConfigPage } from './config';
import { IbaseKv } from './base';
export interface IJobBank{



    upElementList():IHtmlElementList

}




export interface IJobScript{

    config:IConfigPage

    state:IbaseKv

    init:string

    unload:string



    

}