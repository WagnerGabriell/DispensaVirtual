const produtosModel = require("../model/produtosModel");

const getall = async (req,res) => {
    const {idUser} = req.params;
    try{
        const query = await produtosModel.getAll(idUser);
        if(query[0].user_id == req.id)
        return res.status(200).json(query);
    }catch(error){
        return res.status(400).json({message:error});
    }
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
const getProdutosPerCategoria = async (req, res) =>{
    const {idCategoria} = req.params;
    try{
        const query = await produtosModel.getProdutosPerCategoria(idCategoria);
        if(query[0].user_id == req.id)
            return res.status(200).json(query);
    }catch(error){
        return res.status(400).json({message:error});
    }
};

const getProdutosPerLocal = async (req, res) =>{
    const {idLocal} = req.params;
    try{
        const query = await produtosModel.getProdutosPerLocal(idLocal);
        if(query[0].user_id == req.id)
            return res.status(200).json(query);
    }catch(error){
        return res.status(400).json({message:error});
    }
};

const getProdutosPerId = async (req,res) => {
    const {idProduto} = req.params;
    try{
        const query = await produtosModel.getProdutosPerId(idProduto);
        if(query[0].user_id == req.id)
            return res.status(200).json(query);
    }catch(error){
        return res.status(400).json({message:error});
    }
}

module.exports = {
    getall,
    createProduto,
    deleteProduto,
    getProdutosPerCategoria,
    getProdutosPerLocal,
    getProdutosPerId,
}