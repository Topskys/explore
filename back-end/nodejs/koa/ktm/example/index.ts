import "reflect-metadata"; 
import dotenv from "dotenv";
dotenv.config(); // dotenv.config({path:'./.env'});
import "./src/ioc/loader";
import db from "./src/db";
import { Container } from "inversify";
import { config } from "./src/config";
import AppUtil from "./src/utils/AppUtil";
import {bind} from "./src/config/inversify.config";
import { InversifyKoaServer } from 'inversify-koa-utils';
import { buildProviderModule } from "inversify-binding-decorators";


db(); // 连接数据库
const container = new Container(); // 实例化IOC容器
container.load(buildProviderModule()); // 容器就拥有了对所有的类注入的能力
bind(container); // 手动绑定
const appUtil = new AppUtil(); // 应用服务入口工具
const server = new InversifyKoaServer(container); // 设置控制器解析器
server.setConfig(appUtil.setMiddleware); // 设置中间件
const app = server.build() // 创建服务
app.listen(config.server.port, appUtil.callback); // 监听服务端口
