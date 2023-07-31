import { provide } from "inversify-binding-decorators";
import Test from "../models/Test";
import { daoFluentProvide } from "../ioc"
import { TYPE } from "inversify-koa-utils";
import { inject, injectable } from "inversify";


@daoFluentProvide("TestDao")
// @injectable()
// @provide(TestDao)
export default class TestDao {
    // constructor(@inject("Test") private test: typeof Test) { }
    public async findTestByUsername(username: string): Promise<any> {
        // @ts-ignore
        const test=await Test.findOne({ where: { username } });
        console.log("-TestDao-----5----", test)
        return test
    }

    findAll(opt?:any){
        return Test.findAll(opt)
    }
}
