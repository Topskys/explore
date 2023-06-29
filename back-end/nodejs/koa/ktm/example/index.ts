// import { myContainer } from "./inversify.config";
// import { TYPES } from "./types";
// import { Warrior } from "./interfaces";


import { myContainer } from "./src/config/inversify.config";
import { TestService, Warrior } from "./src/services/TestService";
import { TYPES } from "./src/services/Types";
// 
import {con} from "./src/config/tsyringe.config"
import {container} from "tsyringe"
import { MyService } from "./src/services/MyService";

// const ninja = myContainer.get<Warrior>(TYPES.Warrior);
const ninja = myContainer.get<TestService>(TYPES.TestService);

// @ts-ignore
console.log("------inversify--is--ok----------", ninja.getHello(3))

// tsyringe 版
const myInstance =container.resolve<MyService>("MyService");
// @ts-ignore
console.log("-------tsyringe--is--ok----------", myInstance.useHello("World!"))