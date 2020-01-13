const request = require("supertest");
const app = require('../config/server');

//usar o return para executar as promises se não o teste será inválido
test("Deve listar todos os usuários", () => {
    return request(app).get("/users")
            .then((resposta) => {
                //Verifica a resposta do servidor ao chamar a rota
                expect(resposta.status).toBe(200);
                //verifica se existe um retorno do tamanho igual a 1
                expect(resposta.body).toHaveLength(1);
                //verifica se o retorno tem a propriedade e valor igual a tall
                expect(resposta.body[0]).toHaveProperty("name", "Felipe");
            })
});


test("Deve inserir um usuário com sucesso!", () => {
    return request(app).post("/users/create")
            .send({
                name: "Biah",
                mail: "bi@ah.com.br"
            })
            .then((response) => {
                expect(response.status).toBe(200);
                expect(response.body.name).toBe("Biah")
            });
});