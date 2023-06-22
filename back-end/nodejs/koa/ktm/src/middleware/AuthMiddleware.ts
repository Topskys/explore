import { Context, Next } from "koa";
import { verify } from "../utils/auth";

function AuthMiddleware(ctx: Context, next: Next) {
    const token = ctx.headers['authorization']
    if (token !== undefined && token !== "") {
        const { error } = verify(token);
        if (error!==null) {
            // ctx.redirect('/login');
            ctx.body = {
                code: 401,
                // @ts-ignore
                msg: error.message,
                err: error
            }
            return;
        }else {
            return next();
        }
    }
    ctx.body = {
        code: 401,
        msg: 'token is invalid or null',
    }
    return;
}

export default AuthMiddleware;