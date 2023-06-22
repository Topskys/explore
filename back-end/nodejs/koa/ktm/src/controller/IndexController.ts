import { Context } from "koa";
import logger from "../logger";
import AdminService from "../service/AdminService";


class IndexController {
    async index(ctx: Context) {
        // logger.info("msg","msg")
        const admin = await AdminService.getAdminOne();
        ctx.body = admin || [1, 23, 43, 5]
    }
}

export default new IndexController;