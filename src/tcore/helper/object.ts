export default class{



    /**
     * 浅层克隆
     * 
     * @static
     * @template T 
     * @template U 
     * @param {T} target 
     * @param {U} source 
     * @returns 
     */
    static assign<T,U>(target:T,source:U){
        return Object.assign(target,source);
    }



    /**
     * 转换操作  该操作无实际意义  仅仅用于定义的转换
     * 
     * @static
     * @template T 
     * @param {*} source 
     * @returns 
     */
    static parseTs<T>(source:any):T{
        return source;
    }


}