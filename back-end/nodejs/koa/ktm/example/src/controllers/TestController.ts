import { inject } from 'inversify';
import { TYPES } from '../services/Types';
import { TestService } from './../services/TestService';

export class TestController{

    constructor(@inject(TYPES.TestService) private ts:TestService){}

    index(){
        const data=this.ts.getHello(1);
        // @ts-ignore
        console.log("Hello----add-----",data);
    }
}

