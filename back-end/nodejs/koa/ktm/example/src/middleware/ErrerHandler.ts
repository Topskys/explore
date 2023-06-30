import { Context, Next } from "koa";
import { SERVER_ERROR } from "../utils/constants";

/**
 * 全局错误捕获中间件
 */
export default class ErrorHandler {
    async index(ctx: Context, next: Next): Promise<any> {
        try {
            await next();
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: SERVER_ERROR,
            }
        }
    }
}