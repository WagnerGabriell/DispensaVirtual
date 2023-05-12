const localmodel = require("../model/localModel");

const getAll = async (req, res)=>{
    const locais = await localmodel.getAll();
    return res.status(200).json(locais);
};

const createLocal = async (req,res) =>{
    const id_user = req.id;
    const newlocal = await localmodel.newLocal(req.body, id_user);
    return res.status(201).json(newlocal);
};

const updatelocalname = async (req, res) => {
    const { id } = req.params;
    const idUser = req.id
    const uplocal = await localmodel.updatelocalname(req.body, id, idUser);
    return res.status(200).json(uplocal);
};

const updatelocalstatus = async (req, res) => {
    const { id } = req.params;
    const user_id = req.id;
    const uplocal = await localmodel.updatelocalstatus(id, user_id);
    return res.status(201).json(uplocal);
};

const deletelocal = async (req,res) =>{
    const { id } = req.params;
    await localmodel.deletelocal(id);
    return res.status(204).json();
};

const getLocalPerUser = async (req, res) => {
    const {id} = req.params;
    if(req.id == id){
        const querylocal = await localmodel.getPerUser(id);
        return res.status(200).json(querylocal);
    }else
        return res.status(400).json({message:"Acesso negado"});
};

module.exports = {
    getAll,
    createLocal,
    updatelocalname,
    updatelocalstatus,
    deletelocal,
    getLocalPerUser,
};