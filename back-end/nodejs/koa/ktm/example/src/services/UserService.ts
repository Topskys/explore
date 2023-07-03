import { Context } from "koa";

export interface UserService {
    findUser(ctx:Context): Promise<any>;

    getAll():Promise<any>;
}
