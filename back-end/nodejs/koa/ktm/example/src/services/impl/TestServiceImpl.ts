import { injectable, inject } from "inversify";
import { TestService } from '../TestService';
// import { Weapon, ThrowableWeapon, Warrior } from "../TestService";
import { TYPES } from '../types';
import { provide } from 'inversify-binding-decorators';
import Test from "../../models/Test";
import TestDao from "../../dao/TestDao";




// @injectable()
// class Katana implements Weapon {
//     public hit() {
//         return "cut!";
//     }
// }

// @injectable()
// class Shuriken implements ThrowableWeapon {
//     public throw() {
//         return "hit!";
//     }
// }

// @injectable()
// class Ninja implements Warrior {

//     private _katana: Weapon;
//     private _shuriken: ThrowableWeapon;

//     public constructor(
//         @inject(TYPES.Weapon) katana: Weapon,
//         @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
//     ) {
//         this._katana = katana;
//         this._shuriken = shuriken;
//     }

//     public fight() { return this._katana.hit(); }
//     public sneak() { return this._shuriken.throw(); }
// }


// @injectable()
@provide(Symbol.for("TestService"))
export default class TestServiceImpl implements TestService {

    constructor(@inject("TestDao") private testDao: TestDao){
       // super() // or 'tests' if you want to use plural table name in database
    }

    getHello(n: number): number {
        console.log("-TestServiceImpl---------", n)
        return n + 123456;
    }

    async findTestByUsername(username: string): Promise<Test | null> {
        const test=await this.testDao.findTestByUsername(username);
        console.log("-TestServiceImpl-----4----", test)
        return test
    }
}