// file inversify.config.ts

import { Container } from "inversify";
import { Warrior, Weapon, ThrowableWeapon, TestService } from "../services/TestService";
import { Ninja, Katana, Shuriken, TestServiceImpl } from "../services/impl/TestServiceImpl";
import { TYPES } from "../services/Types";


const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
myContainer.bind<TestService>(TYPES.TestService).to(TestServiceImpl);

export { myContainer };