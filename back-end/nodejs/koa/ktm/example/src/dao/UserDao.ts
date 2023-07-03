import { provide } from "inversify-binding-decorators";
import User from "../models/User";
import { daoFluentProvide } from "../ioc"
import { TYPE } from "inversify-koa-utils";
import { inject, injectable } from "inversify";


@daoFluentProvide("UserDao")
// @injectable()
// @provide(TestDao)
export default class UserDao {

    public async findUserByUP(data:any): Promise<any> {   
        return await User.findOne({ where: data });
    }

    public async findAllUsers(): Promise<any>{
        return await User.findAll();
    }
}
