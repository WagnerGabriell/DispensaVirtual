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
    const { id } = req.params;

    if(req.id == id){
        const categorias = await categoriasModel.getCategoriasPerUser(id);
        return res.status(200).json(categorias);
    }else
        return res.status(400).json({message: "Acesso negado"});
};

const updateCategoriasName = async (req, res) => {
    const { id } = req.params;
    
    if(req.id == id){
        const upCategoria = await categoriasModel.updateCategoriasName(req.body, id);
        return res.status(200).json(upCategoria);
    }else
        return res.status(400).json({message: "Acesso negado"});
};

const deleteCategoria = async (req, res) => {
    const { id } = req.params;
    await categoriasModel.deleteCategoria(id);
    return res.status(200).json();
};

module.exports = {
    getAllCategorias,
    createCategorias,
    getCategoriasPerUser,
    updateCategoriasName,
    deleteCategoria,
}