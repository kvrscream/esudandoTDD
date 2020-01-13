const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

let app = express();
//Body parser se incarrega de resolver os posts do teste
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Olá")
});

consign()
    .include("./app/routes")
    .into(app)


module.exports = app;