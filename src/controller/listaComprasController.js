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
        if(Items.length == 0)
            throw "Nenhum Item encontrado";
        if(Items[0].user_id != id)
            throw "Sem Autorização";
        return res.status(200).json(Items);
    }catch(error){
        return res.status(400).json([{message:`${error}`}]);
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

const ItemComprado = async(req,res) =>{
    const {id} = req.params;
    try{
        const PegarItem = await listaComprasModel.itemInfo(id);
        if(PegarItem.length == 0)
            throw "Nenhum Item Encontrado";

        if(PegarItem[0].user_id != req.id)
            throw "Sem Autorização";

        await produtosModel.AdicionarItemComprado(PegarItem[0]);
        await listaComprasModel.DeleteItem(id);
        return res.status(200).json();

    }catch(error){
        return res.status(400).json([{message:`${error}`}])
    }
}

module.exports = {
    createItem,
    getPerUser,
    DeleteItem,
    ItemComprado,
}