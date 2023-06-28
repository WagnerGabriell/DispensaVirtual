const produtosModel = require("../model/produtosModel");

const getAllAndDespensa = async (req,res) => {
    const {idUser} = req.params;
    try{
        const query = await produtosModel.getAllAndDespensa(idUser);
        if(query[0].user_id == req.id)
        return res.status(200).json(query);
    }catch(error){
        return res.status(400).json();
    }
};

const createProduto = async(req,res) => {
    const {id} = req.params;
    const newProduto = await produtosModel.newProduto(req.body, id);
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
        if(query.length < 1)
            throw "Nenhum Produto Encontrado";
        if(query[0].user_id == req.id)
            return res.status(200).json(query);
        else
            throw "Você não possui acesso";

    }catch(error){
        return res.status(400).json([{message:`${error}`}]);
    }
}

const updateProduto = async(req,res) => {
    const {id} = req.params;
    const produto = req.body;
    try{
        const query = await produtosModel.getProdutosPerId(id);
        if(query[0].user_id == req.id){
            await produtosModel.updateProduto(id,produto);
            return res.status(200).json();
        }else
            throw "Você não possui acesso";
    }
    catch(error){
        return res.status(400).json([{message:`${error}`}]);
    }   
}

const ProdutosVencidos = async (req,res) =>{
    const {id} = req.params;
    try{
        const query = await produtosModel.ProdutosVencidos(id);
        if(query[0].user_id == id)
            return res.status(200).json(query);
        throw "Você não possui acesso";
    }catch(error){
        return res.status(400).json([{message:`${error}`}]);
    }
};

const ProdutosAVencer = async (req,res) =>{
    const {id} = req.params;
    try{
        const query = await produtosModel.ProdutosAVencer(id);
        if(query.length < 1)
            throw "Nenhum Produto Esta Proximo de Vencer";
        if(query[0].user_id == id)
            return res.status(200).json(query);
        throw "Voce não possui acesso";
    }catch(error){
        return res.status(400).json([{message:`${error}`}]);
    }
}

module.exports = {
    getAllAndDespensa,
    createProduto,
    deleteProduto,
    getProdutosPerCategoria,
    getProdutosPerLocal,
    getProdutosPerId,
    updateProduto,
    ProdutosVencidos,
    ProdutosAVencer
}