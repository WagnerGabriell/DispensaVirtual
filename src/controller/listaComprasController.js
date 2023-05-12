const listaComprasModel = require("../model/listaComprasModel");

const createItem = async (req, res) =>{
    const iduser = req.id;
    const newItem = await listaComprasModel.createItem(req.body, iduser);
    return res.status(201).json(newItem);
};
const getPerUser = async(req, res) => {
    const {id} = req.params;
    if(req.id == id){
        const Items = await listaComprasModel.getPerUser(id);
        return res.status(200).json(Items);
    }else
        return res.status(400).json({message: "Acesso Negado"});
};

module.exports = {
    createItem,
    getPerUser,
}