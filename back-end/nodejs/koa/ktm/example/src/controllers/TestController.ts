import { inject, injectable } from 'inversify';
import { TYPES } from '../services/types';
import { TestService } from './../services/TestService';
import { TYPE, controller, httpGet, httpPost, interfaces } from 'inversify-koa-utils';
import { Context } from 'koa';
import { provide } from 'inversify-binding-decorators';
import { provideThrowable } from '../ioc';
import TestDTO from '../dto/TestDTO';
import { validate } from 'class-validator';
import ResponseUtil from '../utils/ResponseUtil';
import { createHash } from "crypto"

@controller("/test")
// @injectable()
@provideThrowable(TYPE.Controller, "TestController")
export default class TestController implements interfaces.Controller {

    constructor(@inject(TYPES.TestService) private ts: TestService) { }

    @httpGet("/")
    index(ctx: Context) {
        const data = this.ts.getHello(1);
        console.log("Hello----add-----", data);
        ctx.throw(500, "划分都不会加工厂会受到的vv");
    }

    @httpPost("/login")
    async login(ctx: Context) {
        // 获取请求数据参数
        const testDTO = new TestDTO();
        testDTO.username = ctx.request.body.username;
        testDTO.password = ctx.request.body.password;
        // 数据验证
        const resUtil = new ResponseUtil();
        const errors = await validate(testDTO, { validationError: { target: false } });
        if (errors.length > 0) {
            // 验证失败，处理错误信息
            // ctx.status = 400;
            // ctx.throw(400, errors[0])
            resUtil.error(ctx, Object.values(errors[0].constraints || {})[0],400)
        }
        // 验证通过，继续后续操作
        const test = await this.ts.findTestByUsername(testDTO.username);
        if (test) {
            if (test.password === createHash('sha256').update(testDTO.password).digest('hex')) {
                return resUtil.success(ctx, "登录成功", { token: "255637346" });
            }
            return resUtil.error(ctx, "密码错误");
        }
        return resUtil.error(ctx, "该用户名未注册");
    }

    @httpGet("/list")
    getList(ctx:Context){
        return this.ts.getList(ctx);
    }
}

