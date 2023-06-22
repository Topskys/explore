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
.use(router.routes());

const run = (port: any): Server => app.listen(port, () =>console.log(`server is running at ${port}`));

run(config.server.port);

export default run;