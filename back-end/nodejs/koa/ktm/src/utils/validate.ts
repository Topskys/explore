import Schema, { Values, Rules } from "async-validator";
import { Context } from "koa";

/**
 * @description: 自定义数据效验
 * @param {Context} ctx 上下文
 * @param {Rules} rules 规则
 * @param {boolean} flag 是否返回完整错误信息
 * @return {*}
 */
async function validate<T extends Values>(ctx: Context, rules: Rules, flag: boolean = false): Promise<{ data: T, error: any | null }> {
    const validator = new Schema(rules);
    let data:any={}

    switch (ctx.method) {
        case "GET":
            break;
        case 'POST':
            data = getFormData(ctx)
            break;
        case "PUT":
            data = getFormData(ctx)
            break;
        case "DELETE":
            data = getFormData(ctx)
            break;
    }
    return await validator.validate(data).then(() => {
        return {
            data: data as T, // 断言
            error: null
        }
    }).catch((err) => {
        return {
            data: {} as T,
            error: flag ? err : err.errors[0].message
        }
    })
}

function getFormData(ctx: Context) {
    return ctx.request.body;
}
export default validate;