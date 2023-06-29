import {container} from "tsyringe";
import { MyService } from "../services/MyService";
import { MyServiceImpl } from "../services/impl/MyServiceImpl";

// const con = container.register<MyService>("MyService", { useClass: MyServiceImpl });
const con = container.register("MyService",MyServiceImpl);

export {con};