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
const container = new Container();
container.load(buildProviderModule()); // 容器就拥有了对所有的类注入的能力
bind(container);
const appUtil = new AppUtil();
const server = new InversifyKoaServer(container); // 设置控制器解析器
server.setConfig(appUtil.setMiddleware);
const app = server.build()
app.listen(config.server.port, appUtil.callback);
