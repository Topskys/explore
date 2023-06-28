import TestService from "../TestService";
import Test from "../../model/Admin";
import { injectable } from 'inversify';

@injectable()
export default class TestServiceImpl extends Test implements TestService {

    async getTestByUsername(username: string): Promise<any> {
        return await TestServiceImpl.findOne({ where: { username } });
    }
}