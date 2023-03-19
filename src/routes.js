const express = require("express");
const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const verifyJWT = require("../src/middleware/verifyJWT");


const routes = express.Router();

routes.get("/", (req,res) =>{res.send("Hello World"); });

routes.get("/users",verifyJWT.authmid, usersController.getAll);

routes.post("/users/create", usersController.createUser);

routes.delete("/users/delete/:id",usersController.deleteUser);

routes.get("/login", loginController.authentication);

routes.post("/register", loginController.registerUser);

module.exports = routes;