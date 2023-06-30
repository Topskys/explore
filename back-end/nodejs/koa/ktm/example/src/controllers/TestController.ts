import { inject, injectable } from 'inversify';
import { TYPES } from '../services/types';
import { TestService } from './../services/TestService';
import { TYPE, controller, httpGet, interfaces } from 'inversify-koa-utils';
import { Context } from 'vm';
import { provide } from 'inversify-binding-decorators';

@controller("/")
@injectable()
export default class TestController implements interfaces.Controller {

    constructor(@inject(TYPES.TestService) private ts: TestService) { }

    @httpGet("/")
    index(ctx: Context) {
        const data = this.ts.getHello(1);
        // @ts-ignore
        console.log("Hello----add-----", data);
        ctx.body = {
            code: 200,
            msg: "Success",
            data: {

            }
        }
    }
}

