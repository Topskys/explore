import { injectable, inject } from "inversify";
import { UploadService } from '../UploadService';
import { TYPES } from '../types';
import { provide } from 'inversify-binding-decorators';
import { Context } from "koa";
import fs from "fs"
import ResponseUtil from "../../utils/ResponseUtil";


@provide(Symbol.for("UploadService"))
export default class UploadServiceImpl implements UploadService {

    upload = (ctx: Context) => {
        const file = ctx.request.files?.file;
        console.log("-------upload--------")
        const response = new ResponseUtil()
        if (file) {
            // @ts-ignore
            const fileType = file.type || file.mimetype;
            // @ts-ignore
            const reader = fs.createReadStream(file.path || file.filepath);
            // @ts-ignore
            const ext = path.extname(file.name || file.originalFilename);
            // @ts-ignore
            const filePath = `${this.randomStr(32) || file.newFilename}${ext}`;
            // 判断目录是否存在，否则创建目录
            const dir="../../../statics"
            !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });
            // @ts-ignore
            const writer = fs.createWriteStream(path.join(dir, filePath));
            reader.pipe(writer);
            // response.success(ctx, { url: `http://localhost:${config.server.port}${filePath}`})
            // @ts-ignore
            return response.self(ctx, { url: `http://${AddressIp.address()}:${config.server.port}${filePath}` });
        } else {
            return response.error(ctx, "文件不能为空");
        }
    }
    randomStr = (length: number): string => {
        let rdmStr = "";
        const seeder = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < length; i++) {
            rdmStr += seeder.charAt(Math.floor(Math.random() * seeder.length));
        }
        return rdmStr;
    }
}