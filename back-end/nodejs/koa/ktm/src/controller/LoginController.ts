import { Context } from "koa";
import AdminService from "../service/AdminService";
import { sign } from "../utils/auth";
import response from "../utils/response";
import { Rules } from "async-validator";
import validate from "../utils/validate";


class LoginController {

    async index(ctx: Context) {
        const rules: Rules = {
            username: [
                {
                    type: "string",
                    required: true,
                    message: "用户名不能为空"
                }
            ],
            password: [
                {
                    type: "string",
                    required: true,
                    message: "密码不能为空"
                }
            ]
        }
        interface IAdmin {
            username: string,
            password: string
        }
        const { data, error } = await validate<IAdmin>(ctx, rules);
        if (error !== null) {
            return response.error(ctx, error)
        }
        // const admin = await AdminService.getAdminById(1);
        const admin = await AdminService.getAdminByUsername(data.username);
        if (admin === null) {
            return response.error(ctx, "数据不存在");
        }
        const token = sign(admin);
        // ctx.body = { 
        //     token,
        // }
        response.success(ctx, { token });
    }
}

export default new LoginController;