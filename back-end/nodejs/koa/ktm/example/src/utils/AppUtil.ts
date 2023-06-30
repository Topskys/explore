import Koa from "koa";
import ip from "ip";
import { config } from "../config";

export default class AppUtil {

    constructor(){
        /**
         * 使用 bind() 方法 或 箭头函数 将 this 绑定到当前 class
         */
        this.callback = this.callback.bind(this)
    }

    callback() {
        const host = this.getIp();
        const port = config.server.port;
        const start_time = new Date().toLocaleString();
        const str = `>>>>>>>>>>>>>>>> ${start_time} Server is running at ${host}: ${port} >>>>>>>>>>>>>>>>`
        // logger
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
    }
}