const express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Olá")
})

app.listen(3001);