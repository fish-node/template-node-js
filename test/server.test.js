const request = require("supertest");

const server = require("../src/server");

describe("测试http服务器", () => {
    it("Get /", async () => {
        const result = await request(server).get("/");
        console.log(result);
        expect(result.text).toEqual("hello world");
        expect(result.status).toEqual(200);
    });
});
