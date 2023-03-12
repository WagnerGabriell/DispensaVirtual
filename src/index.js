const express = require("express");
const route = require("./routes.js");

const app = express();


app.use(express.json());
app.use(route);

app.listen(3000,() => console.log("Servidor Rodando na porta 3000"));