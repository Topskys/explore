import { inject, injectable } from 'inversify';
import { TYPES } from '../services/types';
import { UploadService } from '../services/UploadService';
import { TYPE, controller, httpGet, httpPost, interfaces } from 'inversify-koa-utils';
import { Context } from 'koa';
import { provideThrowable } from '../ioc';
import ResponseUtil from '../utils/ResponseUtil';


@controller("/upload")
@provideThrowable(TYPE.Controller, "UploadController")
export default class UploadController implements interfaces.Controller {

    constructor(@inject(TYPES.UploadService) private us: UploadService) { }

    @httpPost("/")
    upload(ctx: Context) {
        this.us.upload(ctx);
    }
}

