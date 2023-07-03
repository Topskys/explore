import { Context } from "koa";


export interface ProductService {

    findByPK(ctx:Context): Promise<any>;

    getAll():Promise<any>;
}
