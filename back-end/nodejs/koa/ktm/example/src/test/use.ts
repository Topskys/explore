class A {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class C {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

//中间件用于收集依赖，实现解耦
export class Container {
    module: any
    constructor() {
        this.module = {}
    }

    // 依赖注入
    provide(key: string, mo: any) {
        this.module[key] = mo
    }

    // 取引用
    get(key: string) {
        return this.module[key]
    }
}

const mymo = new Container()
mymo.provide('a', new A('我是A类！！'))
mymo.provide('c', new A('我是C类！！'))


export default mymo

