import { Context } from "koa";

/**
 * 统一响应工具
 */
export default class ResponseUtil {

    /**
     * 成功
     * @param ctx context 上下文
     * @param msg 响应消息
     * @param data 响应数据
     * @param code 响应数字标识
     */
    success(ctx: Context, msg: any = "success", data: any = [], code: number = 200) {
        ctx.body = {
            code,
            msg,
            data,
        }
    }

    /**
     * 错误
     * @param ctx context 上下文
     * @param msg 响应消息
     * @param data 响应数据
     * @param code 响应数字标识
     */
    error(ctx: Context, msg: any = "error", data: any = [], code: number = 200) {
        ctx.body = {
            code,
            msg,
            data,
        }
    }

    /**
     * 自定义响应
     * @param ctx context 上下文
     * @param options 响应对象
     */
    self(ctx: Context, options:any) {
        ctx.body = {
            code:200,
            msg:"success",
            ...options
        }
    }
}