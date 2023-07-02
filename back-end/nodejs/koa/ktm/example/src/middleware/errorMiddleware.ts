import { Context, Middleware, Next } from "koa";
import { SERVER_ERROR } from "../utils/ConstantUtil";
import logger from "./loggerMiddleware";
import ResponseUtil from "../utils/ResponseUtil";

/**
 * 全局错误捕获中间件
 * @returns Middleware
 */
export default (): Middleware => {
    return async (ctx: Context, next: Next) => {
        try {
            await next();
        } catch (error: any) {
            logger("access").error("error middleware：" + error);
            new ResponseUtil().error(ctx, error.message || SERVER_ERROR, undefined, 500);
        }
    }
}