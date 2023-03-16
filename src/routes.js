const express = require("express");
const usersController = require("./controller/userController");
const routes = express.Router();

routes.get("/", (req,res) =>{res.send("Hello World"); });

routes.get("/users", usersController.getAll);

routes.post("/users/create", usersController.createUser);

routes.delete("/users/delete/:id",usersController.deleteUser);

module.exports = routes;