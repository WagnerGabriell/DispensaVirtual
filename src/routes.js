const express = require("express");
const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const verifyJWT = require("../src/middleware/verifyJWT");
const localController = require("./controller/localController");


const routes = express.Router();

routes.get("/", (req,res) =>{res.send("Hello World"); });

routes.get("/users",verifyJWT.authmid, usersController.getAll);

routes.post("/users/create", usersController.createUser);

routes.delete("/users/delete/:id",usersController.deleteUser);

routes.get("/login", loginController.authentication);

routes.post("/register", loginController.registerUser);

// routes.get("/local",localController.getAll);

routes.get("/local", verifyJWT.authmid, localController.getLocalPerUser);

routes.post("/local/create", verifyJWT.authmid, localController.createLocal);

module.exports = routes;