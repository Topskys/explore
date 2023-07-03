import { Context } from "koa";


export interface UploadService {

    upload(ctx:Context):any;
}
