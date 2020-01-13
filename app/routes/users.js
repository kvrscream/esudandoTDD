
module.exports = (app) => {
    app.get("/users", (req, res) => {
        const users = [{
            name: "Felipe",
            mail: "fe@lipe.com.br"
        }]
        res.json(
            users
        );
    });

    app.post("/users/create", (req, res) => {
        res.json(
            req.body
        );
    });

}