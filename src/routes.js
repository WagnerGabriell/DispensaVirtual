const express = require("express");

const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const localController = require("./controller/localController");
const categoriasController = require("./controller/categoriasController");
const produtosController = require("../src/controller/produtosController");
const verifyJWT = require("./middleware/verifyJWT");
const verifyNullable = require("./middleware/verifyNullable");




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

routes.put("/local/update/name/:id", verifyNullable.verifyNullable, verifyJWT.authmid, localController.updatelocalname);

routes.put("/local/update/status/:id", verifyJWT.authmid, localController.updatelocalstatus);

routes.delete("/local/delete/:id", verifyJWT.authmid, localController.deletelocal);

//Rotas categorias

// routes.get("/categorias", categoriasController.getAllCategorias);

routes.get("/categorias", verifyJWT.authmid, categoriasController.getCategoriasPerUser);

routes.post("/categorias/create", verifyJWT.authmid, categoriasController.createCategorias);

routes.put("/categorias/update/name/:id", verifyJWT.authmid, categoriasController.updateCategoriasName);

routes.delete("/categorias/delete/:id", verifyJWT.authmid, categoriasController.deleteCategoria);

//Rotas Produto
routes.get("/produtos", produtosController.getall);
routes.post("/produtos/create",verifyJWT.authmid ,produtosController.createProduto);
routes.delete("/produtos/delete/:id", produtosController.deleteProduto);


module.exports = routes;