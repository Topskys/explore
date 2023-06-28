import { MyService, MyServiceImpl } from './src/service/services';
import dotenv from "dotenv";
dotenv.config();// dotenv.config({path:'./.env'});
import Koa from "koa";
import router from "./src/router" ;
import { Server } from "http";
import config from "./src/config";
import AccessLoggerMiddleware from "./src/middleware/AccessLogMiddleware";
import db from "./src/db";
import KoaBody from "koa-body";
import KoaStatic from "koa-static";
import path from "path";
import container from './src/config/inversify.config';
import TestService from "./src/service/TestService";
import { MyService, MyServiceImpl } from "./src/service/services";
import TestServiceImpl from "./src/service/impl/TestServiceImpl";
import 'reflect-metadata';
import { get } from 'inversify-inject-decorators';

db();



const app = new Koa();

app
.use(KoaBody({
    multipart:true, // 支持多种参数传输
    formidable:{
        maxFieldsSize:200*1024*1024, // 设置上传文件大小最大上限，默认2MB
    }
}))
.use(KoaStatic(path.join(__dirname,'statics')))
.use(AccessLoggerMiddleware)

// .use(async (ctx,next)=>{
//     // const ms=container.get<TestService>(TestServiceImpl)
//     // console.log("-----xxxx-----", ms.getTestByUsername("mr.llb@proton.me"))
//     // await next();
// })



// 使用装饰器获取从容器解析的服务实例
class MyApp {
    @get("MyService")
    private myService!: MyService;

    public handleRequest() {
        this.myService.doSomething();
    }
}

// 注册中间件函数并调用请求处理方法
app.use(async (ctx, next) => {
    const myApp = new MyApp();
    myApp.handleRequest();
    await next();
});
app.use(router.routes());

const run = (port: any): Server => app.listen(port, () =>console.log(`server is running at ${port}`));

run(config.server.port);

export default run;