const categoriasModel = require("../model/categoriasModel");
const { param } = require("../routes");

const getAllCategorias = async (req, res) => {
    const categoria = await categoriasModel.getAllCategorias();
    return res.status(200).json(categoria);
};

const createCategorias = async (req, res) => {
    const newcategoria = await categoriasModel.createCategorias(req.body, req.id);
    return res.status(201).json(newcategoria);
};

const getCategoriasPerUser = async (req, res) => {
    const categorias = await categoriasModel.getCategoriasPerUser(req.id);
    return res.status(200).json(categorias);
};

const updateCategoriasName = async (req, res) => {
    const { id } = req.params;
    const upCategoria = await categoriasModel.updateCategoriasName(req.body, id);
    return res.status(200).json(upCategoria);
};

module.exports = {
    getAllCategorias,
    createCategorias,
    getCategoriasPerUser,
    updateCategoriasName,
}