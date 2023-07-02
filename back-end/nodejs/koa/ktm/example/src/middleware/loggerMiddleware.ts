import log4js, { configure, getLogger } from "log4js";
import { Context, Middleware, Next } from "koa";
import { config } from "../config";

/**
 * 配置日志
 */
log4js.configure(config.log);

/**
 * 日志中间件
 * @param category 要记录日志的类别
 * @returns Middleware
 */
export function loggerMiddleware(category?: string | undefined): Middleware {
    return async (ctx: Context, next: Next) => {
        const start = Date.now();
        await next();
        const response_time = Date.now() - start;
        const { method, path, url, status, headers } = ctx;
        const logStr = `path: ${path} | method: ${method} | status：${status} | response_time：${response_time}ms | ua: ${headers["user-agent"]}`;
        log4js.getLogger(category).info(logStr);
        console.log(`path: ${ path } | method: ${ method } | status：${ status } | response_time：${ response_time }ms`);
    }
}

/**
 * getLogger(category?string|undefined)
 * category : access | db | ... 
 */
export default getLogger;