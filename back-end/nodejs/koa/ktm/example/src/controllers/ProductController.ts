import { inject, injectable } from 'inversify';
import { TYPES } from '../services/types';
import { ProductService } from '../services/ProductService';
import { TYPE, controller, httpGet, httpPost, interfaces } from 'inversify-koa-utils';
import { Context } from 'koa';
import { provide } from 'inversify-binding-decorators';
import { provideThrowable } from '../ioc';
import ProductDTO from '../dto/TestDTO';
import { validate } from 'class-validator';
import ResponseUtil from '../utils/ResponseUtil';
import { createHash } from "crypto"

@controller("/product")
@provideThrowable(TYPE.Controller, "ProductController")
export default class ProductController implements interfaces.Controller {

    constructor(@inject(TYPES.ProductService) private ps: ProductService) { }

    @httpGet("/")
    async index(ctx: Context) {
        const list = await this.ps.getAll();
        ctx.body={
            code:200,
            msg:"success",
            list
        }
    }

    @httpGet("/:id")
    async login(ctx: Context) {
        // 数据验证
        const resUtil = new ResponseUtil();
        // 验证通过，继续后续操作
        const test = await this.ps.findByPK(ctx);
        if (test) {
            return resUtil.success(ctx, undefined, test);
        }
        return resUtil.error(ctx, "not found");
    }
}

