import "reflect-metadata";
import { Container} from "inversify";
// import { InversifyKoaServer } from "inversify-koa-utils";
import { config } from "./src/config";
import AppUtil from "./src/utils/AppUtil";
import { autoProvide, buildProviderModule, fluentProvide } from "inversify-binding-decorators";
import container from "./src/config/inversify.config";
import {  interfaces, InversifyKoaServer, TYPE } from 'inversify-koa-utils';





// 将所有的 Controllers 自动绑定到容器中
// const controllers =container.getAll<interfaces.Controller>(TYPE.Controller);

/**
 * 创建服务
 */
const server = new InversifyKoaServer(container); // 设置控制器解析器
const appUtil = new AppUtil();
server.setConfig(appUtil.setMiddleware);
server.build().listen(config.server.port, appUtil.callback);
