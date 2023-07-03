import { provide } from "inversify-binding-decorators";
import Product from "../models/Product";
import { daoFluentProvide } from "../ioc"
import { TYPE } from "inversify-koa-utils";
import { inject, injectable } from "inversify";


@daoFluentProvide("ProductDao")
export default class ProductDao {

    public async findByPK(id:any): Promise<any> {   
        return await Product.findOne({ where: {id} });
    }

    public async findAll(): Promise<any>{
        return await Product.findAll();
    }
}
