

/**
 * 节点类型枚举
 * 
 * @export
 * @enum {number}
 */
export enum AEnumNodeType{
    
    /**
     * 未定义类型
     */
    unknow,

    /**
     * 忽略类型
     */
    ignore,

    /**
     * 基本元素
     */
    element,


    form,


    import,



    /**
     * 配置项
     */
    config,


    /**
     * 状态数据
     */
    state,

    /**
     * 模板
     */
    template,

    /**
     * 脚本
     */
    script

}





export enum AEnumRegexKey{

    state,

    item,

    env,

    this,

    tag,

    unknow

}


