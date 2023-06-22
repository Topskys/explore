import { Context } from "koa";

function success(ctx: Context, data:any = [], msg: string = "success", code: number = 200) {
    ctx.body = {
        code,
        msg,
        data
    }
}

function error(ctx: Context, msg: string = 'error', code: number = 400, data:any = []) {
    ctx.body = {
        code,
        msg,
        data
    }
}

export default {
    success,
    error,
}