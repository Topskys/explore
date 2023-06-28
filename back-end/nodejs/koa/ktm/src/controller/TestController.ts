import { Context } from "koa";
import response from "../utils/response";

class TestController {

    async findOne(ctx: Context){
        const {username, password} = ctx.request.body;
        // const data=await new TestService()
        // return response.success(ctx,data);
    }
}