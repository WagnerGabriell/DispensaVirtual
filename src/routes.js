const express = require("express");

const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const localController = require("./controller/localController");
const categoriasController = require("./controller/categoriasController");
const produtosController = require("../src/controller/produtosController");
const listaComprasController = require("./controller/listaComprasController");
const verifyJWT = require("./middleware/verifyJWT");
const verifyNullable = require("./middleware/verifyNullable");


const routes = express.Router();


//Rotas usuarios
routes.get("/users", usersController.getAll);

routes.delete("/users/delete/:id",usersController.deleteUser);

//Rotas Registro ,login e alterar senha
routes.get("/login", verifyNullable.Login, loginController.authentication);

routes.post("/register", verifyNullable.Register, loginController.registerUser);

routes.post("/alterar/senha", verifyNullable.AlterarPassword, loginController.altPassword);


//Rotas local

// routes.get("/local",localController.getAll);

routes.get("/local/:id", verifyJWT.authmid, localController.getLocalPerUser);

routes.post("/local/create", verifyJWT.authmid, verifyNullable.LocalECategoria, localController.createLocal);

routes.put("/local/update/name/:id", verifyJWT.authmid,  verifyNullable.UpdateLocalECategoria, localController.updatelocalname);

routes.put("/local/update/status/:id", verifyJWT.authmid, localController.updatelocalstatus);

routes.delete("/local/delete/:id", verifyJWT.authmid, localController.deletelocal);

//Rotas categorias

// routes.get("/categorias", categoriasController.getAllCategorias);

routes.get("/categorias/:id", verifyJWT.authmid, categoriasController.getCategoriasPerUser);

routes.post("/categorias/create", verifyJWT.authmid, verifyNullable.LocalECategoria, categoriasController.createCategorias);

routes.put("/categorias/update/name/:id",verifyJWT.authmid, verifyNullable.UpdateLocalECategoria, categoriasController.updateCategoriasName);

routes.delete("/categorias/delete/:id", verifyJWT.authmid, categoriasController.deleteCategoria);

//Rotas Produto
routes.get("/produtos", produtosController.getall);

routes.post("/produtos/create",verifyJWT.authmid, verifyNullable.Produtos ,produtosController.createProduto);

routes.delete("/produtos/delete/:id", produtosController.deleteProduto);

//Rptas ListaCompras

routes.get("/listaCompras/:id", verifyJWT.authmid,listaComprasController.getPerUser);
routes.post("/listaCompras/create", verifyJWT.authmid,listaComprasController.createItem);


module.exports = routes;