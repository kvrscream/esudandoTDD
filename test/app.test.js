const request = require("supertest");
const app = require("../config/server");

test("Deve responder na raiz", () => {
    return request(app).get("/")
            .then((result) => {
                expect(result.status).toBe(200);
            })
});