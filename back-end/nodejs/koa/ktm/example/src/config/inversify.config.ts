// file inversify.config.ts

import { Container } from "inversify";
import { Warrior, Weapon, ThrowableWeapon, TestService } from "../services/TestService";
import { Ninja, Katana, Shuriken, TestServiceImpl } from "../services/impl/TestServiceImpl";
import { TYPES } from "../services/types";
import TestController from "../controllers/TestController";
import { interfaces,  TYPE } from 'inversify-koa-utils';
import { buildProviderModule } from "inversify-binding-decorators";

/**
 * 依赖注入容器
 * 这是注入依赖绑定方式一----面向对象
 * 方式二----面向过程 
 * const container = new Container();
 * 然后用 container 代替方式一类的 this 执行绑定即可。
 * 最后在程序入口文件实例化服务 new InversifyKoaServer(以new Intersify()或container为参数)。
 */
class Inversify extends Container {

    constructor() {
        super();

        /**
         * bind controller
         */
        this.bind<interfaces.Controller>(TYPE.Controller).to(TestController).whenTargetNamed('TestController');
        
        /**
         * bind service
         */
        this.bind<Warrior>(TYPES.Warrior).to(Ninja);
        this.bind<Weapon>(TYPES.Weapon).to(Katana);
        this.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
        // this.bind<TestService>(TYPES.TestService).to(TestServiceImpl);

        /**
         * bind others
         */
        this.load(buildProviderModule());
    }
}

export default new Inversify();
