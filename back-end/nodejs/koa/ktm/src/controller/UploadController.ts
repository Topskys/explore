import fs from "fs";
import path from "path";
import { Context } from "koa";
import response from "../utils/response";
import config from "../config";

class UploadController {
    index(ctx: Context): void { }

    upload=(ctx: Context)=> {
        const file = ctx.request.files?.file;
        if (file) {
            // @ts-ignore
            console.log(ctx,file);
            // @ts-ignore
            const fileType = file.type || file.mimetype;
            const typeSet=new Set(["image/jpg","image/png","image/gif","image/jpeg"]);
            if (!typeSet.has(fileType)){
                return response.error(ctx,"非法文件上传")
            }
            // @ts-ignore
            const reader = fs.createReadStream(file.path || file.filepath);
            // @ts-ignore
            const ext = path.extname(file.name || file.originalFilename);
            // @ts-ignore
            const filePath = `/upload/${this.randomStr(32)||file.newFilename}${ext}`
            // @ts-ignore
            const writer = fs.createWriteStream('statics'+filePath);
            reader.pipe(writer);
            response.success(ctx, { url: `http://localhost:${config.server.port}${filePath}`})
        } else {
            response.error(ctx, "文件不能为空")
        }
    }
    randomStr=(length: number): string =>{
        let rdmStr = "";
        const seeder = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < length; i++) {
            rdmStr += seeder.charAt(Math.floor(Math.random() * seeder.length));
        }
        return rdmStr;
    }
}

export default new UploadController;