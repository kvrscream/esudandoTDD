const supertest = require("supertest");

const request = supertest("http://localhost:3001");

test("Checando a porta e status de retorno", () => {
    return request.get("/").then((response) => {
        expect(response.status).toBe(200);
    });
});