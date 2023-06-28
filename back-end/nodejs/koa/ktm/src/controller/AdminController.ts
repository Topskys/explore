import { Rules } from 'async-validator';
import { Context } from "koa";
import { URLSearchParams } from "url";
import AdminService from "../service/AdminService";
import response from "../utils/response";
import paginate from "../utils/paginate";
import validate from '../utils/validate';
import { createHash } from "crypto";


class AdminController {

    async getAdmin(ctx: Context) {
        const admin_id = ctx.params.id;
        const admin = await AdminService.getAdminById(admin_id);
        response.success(ctx, admin);
    }

    async getAdminList(ctx: Context) {
        // URLSearchParams { 'page' => '1', 'limit' => '10' }
        const usp = new URLSearchParams(ctx.querystring);
        let page = 1, limit = 10;

        usp.get('page') !== null && !isNaN(Number(usp.get('page'))) && (page = Number(usp.get('page')));
        usp.get('limit') !== null && !isNaN(Number(usp.get('limit'))) && (limit = Number(usp.get('limit')));

        const { rows, count } = await AdminService.getAdminListByPage(page, limit);
        response.success(ctx, paginate(rows, page, count, limit));
    }
    async createAdmin(ctx: Context) {
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
                },
                {
                    type: "string",
                    min: 6,
                    message: "密码长度不能小于6个字符"
                },
            ]
        }
        interface IAdmin {
            username: string,
            password: string,
        }
        const { data, error } = await validate<IAdmin>(ctx, rules);
        if (!error == null) {
            return response.error(ctx, error);
        }
        // 判断用户是否存在
        const admin = await AdminService.getAdminByUsername(data.username);
        if (admin !== null) {
            return response.error(ctx, "用户已存在");
        }
        // 使用不可能逆MD5加密密码
        data.password = createHash('md5').update(data.password).digest('hex');
        const row = await AdminService.addAdmin(data);
        if (row.id > 0) { // 添加成功的行id会给到row
            return response.success(ctx)
        }
        return response.error(ctx, "添加失败");
    }
    async editAdmin(ctx: Context) {
        const id = ctx.params["id"] as number;
        const admin = await AdminService.getAdminById(id);
        if (admin === null) {
            return response.error(ctx, "用户不存在");
        }
        const rules: Rules = {
            username: [
                {
                    type: "string",
                    required: true,
                    message: "用户名不能为空"
                }
            ],
        }
        interface IAdmin {
            username: string,
            password: string
        }
        const { data, error } = await validate<IAdmin>(ctx, rules);
        if (error !== null) {
            return response.error(ctx, error);
        }
        if (data.password !== undefined && data.password !== '') {
            data.password = createHash("md5").update(data.password).digest("hex");
        }
        const [number] = await AdminService.updateAdmin(id, data);
        if (number > 0) { // 影响的行数
            return response.success(ctx)
        } else {
            return response.error(ctx, "更新失败")
        }
    }
    async deleteAdmin(ctx: Context) {
        const id = ctx.params["id"] as number;
        const admin = await AdminService.getAdminById(id);
        if (admin === null) {
            return response.error(ctx, "用户不存在");
        }
        const row = await AdminService.deleteAdmin(id);
        if (row > 0) { // 受影响的行数
            return response.success(ctx)
        }
        return response.error(ctx, "删除失败");
    }
}

export default new AdminController;