const express = require("express");
const consign = require("consign");
let app = express();

app.get("/", (req, res) => {
    res.send("Olá")
});

consign()
    .include("./app/routes")
    .into(app)


module.exports = app;