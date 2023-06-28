import { Container } from 'inversify';
import { MyService, MyServiceImpl } from '../service/services';
import { Types } from '../service/Types';
import { Targets } from '../service/Targets';


// IOC容器
const container = new Container();
container.bind<Types.Service>(Types.Service).to(Targets.Services.MyService);

export default container;