import { inject, injectable } from 'inversify';
import { TYPES } from '../services/types';
import { UserService } from '../services/UserService';
import { TYPE, controller, httpGet, httpPost, interfaces } from 'inversify-koa-utils';
import { Context } from 'koa';
import { provide } from 'inversify-binding-decorators';
import { provideThrowable } from '../ioc';
import TestDTO from '../dto/TestDTO';
import { validate } from 'class-validator';
import ResponseUtil from '../utils/ResponseUtil';
import { createHash } from "crypto"

@controller("/user")
@provideThrowable(TYPE.Controller, "UserController")
export default class UserController implements interfaces.Controller {

    constructor(@inject(TYPES.UserService) private us: UserService) { }

    @httpGet("/")
    async index(ctx: Context) {
        const list = await this.us.getAll();
        ctx.body={
            code:200,
            msg:"success",
            list
        }
    }

    @httpPost("/login")
    async login(ctx: Context) {
        // 数据验证
        const resUtil = new ResponseUtil();
        // 验证通过，继续后续操作
        const test = await this.us.findUser(ctx);
        if (test) {
            return resUtil.success(ctx, "登录成功", { token: "255637346" });
        }
        return resUtil.error(ctx, "该用户名未注册");
    }
}

