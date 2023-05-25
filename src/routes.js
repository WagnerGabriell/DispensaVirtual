const express = require("express");
const cors = require("cors");
const usersController = require("./controller/userController");
const loginController = require("./controller/loginController");
const localController = require("./controller/localController");
const categoriasController = require("./controller/categoriasController");
const produtosController = require("../src/controller/produtosController");
const listaComprasController = require("./controller/listaComprasController");
const verifyJWT = require("./middleware/verifyJWT");
const verifyNullable = require("./middleware/verifyNullable");


const routes = express.Router();
routes.use(cors());

//Rotas usuarios
routes.get("/users", usersController.getAll);

routes.delete("/users/delete/:id",usersController.deleteUser);

//Rotas Registro ,login e alterar senha

//Rota de Login de usuario
routes.post("/login", verifyNullable.Login, loginController.authentication);

//Rota De cadastro de usuario
routes.post("/register", verifyNullable.Register, loginController.registerUser);

// Rota para pegar o email do usuario para o envio do link 
routes.post("/esqueci-senha", verifyNullable.envioToken, loginController.envioToken);

// rota do link recebido por email
routes.post("/alterar-senha/:token", loginController.altPassword);


//Rotas local

//Pega todas as despensa de um determinado usuario
routes.get("/local/:id", verifyJWT.authmid, localController.getLocalPerUser);

//Cadastra uma nova despensa
routes.post("/local/create/:id", verifyJWT.authmid, verifyNullable.LocalECategoria, localController.createLocal);

//Edita uma determinada despensa
routes.put("/local/update/:id", verifyJWT.authmid,  verifyNullable.UpdateLocalECategoria, localController.updatelocalname);

//Ativa ou desativa uma determinada despensa
routes.put("/local/update/status/:id", verifyJWT.authmid, localController.updatelocalstatus);

//Deleta uma determinada despensa
routes.delete("/local/delete/:id", verifyJWT.authmid, localController.deletelocal);

routes.get("/local/describe/:idlocal", verifyJWT.authmid,localController.getPerId);

//Rotas categorias

//Pega todas as categorias de um determinado usuario
routes.get("/categorias/:id", verifyJWT.authmid, usersController.getcategoriaPerUser);

routes.get("/categorias/describe/:idCategoria", verifyJWT.authmid, categoriasController.getCategoriaPerId);

//Cadastra uma nova categoria
routes.post("/categorias/create/:id", verifyJWT.authmid, verifyNullable.LocalECategoria, categoriasController.createCategorias);

//Editar determina categoria
routes.put("/categorias/update/:id",verifyJWT.authmid, verifyNullable.UpdateLocalECategoria, categoriasController.updateCategoriasName);

//Deleta Determinada categoria
routes.delete("/categorias/delete/:id", verifyJWT.authmid, categoriasController.deleteCategoria);



//Rotas Produto

//pega os dados para a exibição das informações do produtos
routes.get("/produtos/describe/:idProduto", verifyJWT.authmid,produtosController.getProdutosPerId);

//Pega todos os produtos com a categoria X
routes.get("/produtos/categoria/:idCategoria", verifyJWT.authmid, produtosController.getProdutosPerCategoria);

//Pega todos os produtos que estão cadastrados com a dispensa X
routes.get("/produtos/local/:idLocal", verifyJWT.authmid, produtosController.getProdutosPerLocal);

//Pega todos os produtos de um usuario X
routes.get("/produtos/:idUser", verifyJWT.authmid, produtosController.getAllAndDespensa)

//Cadastra novo produto
routes.post("/produtos/create/:id",verifyJWT.authmid, verifyNullable.Produtos ,produtosController.createProduto);

routes.put("/produtos/update/:id", verifyJWT.authmid, produtosController.updateProduto);

//Deleta um produto X
routes.delete("/produtos/delete/:id", produtosController.deleteProduto);

//Rptas ListaCompras

//Pega todos os produtos a comprar de um determinado usuario
routes.get("/listaCompras/:id", verifyJWT.authmid,listaComprasController.getPerUser);

// Cadastra um novo item na tabela de lista de compras
routes.post("/listaCompras/create/:id", verifyJWT.authmid, verifyNullable.AddListaCompras,listaComprasController.createItem);

routes.delete("/listaCompras/delete/:id", verifyJWT.authmid, listaComprasController.DeleteItem);


module.exports = routes;