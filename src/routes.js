const express = require("express");
const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const verifyJWT = require("../src/middleware/verifyJWT");
const localController = require("./controller/localController");


const routes = express.Router();

routes.get("/", (req,res) =>{res.send("Hello World"); });

//Rotas usuarios
routes.get("/users", usersController.getAll);

routes.post("/users/create", usersController.createUser);

routes.delete("/users/delete/:id",usersController.deleteUser);

//Rotas Registro e login
routes.get("/login", loginController.authentication);

routes.post("/register", loginController.registerUser);


//Rotas local

// routes.get("/local",localController.getAll);

routes.get("/local", verifyJWT.authmid, localController.getLocalPerUser);

routes.post("/local/create", verifyJWT.authmid, localController.createLocal);

routes.put("/local/update/name/:id", verifyJWT.authmid, localController.updatelocalname);

routes.put("/local/update/status/:id", verifyJWT.authmid, localController.updatelocalstatus);

routes.delete("/local/delete/:id", verifyJWT.authmid, localController.deletelocal);

module.exports = routes;