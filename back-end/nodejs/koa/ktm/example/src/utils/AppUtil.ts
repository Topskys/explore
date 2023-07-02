import Koa from "koa";
import ip from "ip";
import path from "path";
import KoaBody from "koa-body";
import KoaStatic from "koa-static";
import { config } from "../config";
import getLogger, { loggerMiddleware } from "../middleware/loggerMiddleware";
import errorMiddleware from "../middleware/errorMiddleware";

export default class AppUtil {

    constructor() {
        /**
         * 使用 bind() 方法 或 箭头函数 将 this 绑定到当前 class
         */
        this.callback = this.callback.bind(this)
    }

    /**
     * 启动服务回调方法
     */
    callback() {
        const host = this.getIp();
        const port = config.server.port;
        const str = `Server is running at ${host}:${port}.`
        // logger
        getLogger().info(str);
        console.log(str);
    }

    /**
     * 获取主机ip地址
     * http://127.0.0.1
     */
    getIp(): string {
        return `http://${ip.address()}`
    }

    /**
     * 进行其他中间件和配置的设置
     */
    setMiddleware(server: Koa<Koa.DefaultState, Koa.DefaultContext>) {
        // TODO...
        server.use(KoaBody(config.server.koa_body))
            .use(KoaStatic(path.join(__dirname, 'statics')))
            .use(loggerMiddleware("access"))
            .use(errorMiddleware())
    }
}