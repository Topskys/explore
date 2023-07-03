import { injectable, inject } from "inversify";
import { UserService } from '../UserService';
import { TYPES } from '../types';
import { provide } from 'inversify-binding-decorators';
import UserDao from "../../dao/UserDao";
import { Context } from "koa";


@provide(Symbol.for("UserService"))
export default class UserServiceImpl implements UserService {

    constructor(@inject("UserDao") private userDao: UserDao){}

    async findUser(ctx:Context): Promise<any> {
        const {username, password}=ctx.request.body;
        const user=await this.userDao.findUserByUP({username,password});
        console.log("-UserServiceImpl---------", user)
        return user;
    }

    async getAll(): Promise<any>{
        return await this.userDao.findAllUsers();
    }
}