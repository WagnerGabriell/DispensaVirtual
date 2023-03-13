const express = require("express");
const route = require("./routes.js");
require("dotenv").config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(route);

app.listen(port,() => console.log(`Servidor Rodando na porta ${port}`));