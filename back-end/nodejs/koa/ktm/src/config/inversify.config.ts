// import { Container } from 'inversify';
// import TestService from '../service/TestService';
// import TestServiceImpl from '../service/impl/TestServiceImpl';


// const container = new Container();
// container.bind<TestService>(TestServiceImpl).to(TestServiceImpl);

// export default container;

// inversify.config.ts
import { Container } from 'inversify';
import { MyService, MyServiceImpl } from '../service/services';

const container = new Container();
container.bind<MyService>("MyService").to(MyServiceImpl);

export default container;