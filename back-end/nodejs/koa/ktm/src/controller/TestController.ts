import { Context } from "koa";
import response from "../utils/response";
import  MyService  from "../service/TestService";
import { Types } from "../service/Types";
import { Targets } from "../service/Targets";
import { injectable,inject,named } from 'inversify';


class TestController {

    constructor(
        @inject(Types.Service) 
        @named(Targets.Service.MyService)
        private myService: MyService){}

    async findOne(ctx: Context){
        const {username, password} = ctx.request.body;
        const data=await this.myService.MyService();
        return response.success(ctx,data);
    }
}

export default TestController;