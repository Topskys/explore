import { MyService } from "../MyService";

export class MyServiceImpl implements MyService {
    
    public useHello(str:string): string {
        return "Hello，"+str;
    }
}