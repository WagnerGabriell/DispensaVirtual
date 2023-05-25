const listaComprasModel = require("../model/listaComprasModel");
const produtosModel = require("../model/produtosModel");

const createItem = async (req, res) =>{
    const {id} =  req.params;
    const newItem = await listaComprasModel.createItem(req.body, id);
    return res.status(201).json(newItem);
};
const getPerUser = async(req, res) => {
    const {id} = req.params;
    try{
        const Items = await listaComprasModel.getPerUser(id);
        return res.status(200).json(Items);
    }catch(error){
        console.log(error);
    }
};

const DeleteItem = async (req,res) =>{
    const {id} = req.params;
    try{
        await listaComprasModel.DeleteItem(id);
        return res.status(200).json();
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createItem,
    getPerUser,
    DeleteItem,
}