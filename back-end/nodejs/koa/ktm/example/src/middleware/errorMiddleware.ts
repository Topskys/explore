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
            // 处理内层错误，如果已经有错误被抛出，则不处理响应
            if (!ctx.body || !ctx.status) {
                const resUtil = new ResponseUtil();
                resUtil.error(ctx, error.message || SERVER_ERROR,500);
            }
        }
    }
}