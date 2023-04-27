const produtosModel = require("../model/produtosModel");

const getall = async (req,res) => {
    const produtos = await produtosModel.getAll();
    return res.status(200).json(produtos);
};

const createProduto = async(req,res) => {
    const newProduto = await produtosModel.newProduto(req.body, req.id);
    return res.status(201).json(newProduto);
}

const deleteProduto = async(req,res)=>{
    const id = req.params;
    const deleleProduto = await produtosModel.deleteProduto(id);
    return res.status(200).json(deleleProduto);
}

module.exports = {
    getall,
    createProduto,
    deleteProduto,
}