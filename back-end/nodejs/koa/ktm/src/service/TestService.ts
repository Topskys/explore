

export default interface TestService {

    getTestByUsername(username: string): Promise<any>;
}

