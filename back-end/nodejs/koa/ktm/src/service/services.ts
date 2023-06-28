import { injectable } from 'inversify';

export interface MyService {
    doSomething(): void;
}

@injectable()
export class MyServiceImpl implements MyService {
    doSomething(): void {
        console.log('Doing something...');
    }
}