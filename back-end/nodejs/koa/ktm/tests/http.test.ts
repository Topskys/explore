import run from "../index";
import request from 'supertest';
import { Server } from "http";

describe("http", () => {
    let server: Server;
    beforeAll(() => {
        server = run(3002);
    })
    it("GET /admin"), () => {
        return request(server)
            .get("/admin")
            .expect(200)
            .then((response) =>{
                expect(response.body.length).toEqual(4)
                expect(response.body).toStrictEqual([1,23,43,5]);
            })
    }
    afterAll(async () => server.close());
})