import { injectable, inject } from "inversify";
import { ProductService } from '../ProductService';
import { TYPES } from '../types';
import { provide } from 'inversify-binding-decorators';
import ProductDao from "../../dao/ProductDao";
import { Context } from "koa";


@provide(Symbol.for("ProductService"))
export default class ProductServiceImpl implements ProductService {

    constructor(@inject("ProductDao") private productDao: ProductDao){}

    async findByPK(ctx:Context): Promise<any> {
        const {id}=ctx.params;
        const user = await this.productDao.findByPK(id);
        console.log("-ProductServiceImpl---------", user)
        return user;
    }

    async getAll(): Promise<any>{
        return await this.productDao.findAll();
    }
}