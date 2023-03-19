const express = require("express");
const routes = require("./routes.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port,() => console.log(`Servidor Rodando na porta ${port}`));