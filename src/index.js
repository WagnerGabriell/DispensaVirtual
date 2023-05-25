const express = require("express");
const routes = require("./routes.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(port,() => console.log(`Servidor Rodando na porta ${port}`));