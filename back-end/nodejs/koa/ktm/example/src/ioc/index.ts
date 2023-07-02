import { fluentProvide } from 'inversify-binding-decorators';

// 流式的 provide，可以添加条件
export const provideThrowable = (identifier: symbol, name: string) => {
    return fluentProvide(identifier).whenTargetNamed(name).done();
}

export const daoFluentProvide = (identifier: any)=>{
    return fluentProvide(identifier).inSingletonScope().done();
}


 