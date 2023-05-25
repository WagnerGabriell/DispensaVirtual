const localmodel = require("../model/localModel");

const getAll = async (req, res)=>{
    const locais = await localmodel.getAll();
    return res.status(200).json(locais);
};

const createLocal = async (req,res) =>{
    const {id} = req.params;
    const userid = req.id;
    if(userid == id){
        const newlocal = await localmodel.newLocal(req.body, id);
        return res.status(201).json(newlocal);
    }else{
        return res.status(400).json();
    }
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
    const userid = req.id
    await localmodel.deletelocal(id,userid);
    return res.status(204).json();
};

const getLocalPerUser = async (req, res) => {
    const {id} = req.params;
        try{
            const querylocal = await localmodel.getPerUser(id);
            return res.status(200).json(querylocal);
        }catch(error){
            return res.status(400).json();
    }
};
const getPerId = async (req, res)=>{
    const {idlocal} = req.params;
    try{
        const query = await localmodel.getPerId(idlocal);
        if(query[0].user_id == req.id)
            return res.status(200).json(query);
    }catch(error){
        return res.status(400).json({message:error});
    }
};

module.exports = {
    getAll,
    createLocal,
    updatelocalname,
    updatelocalstatus,
    deletelocal,
    getLocalPerUser,
    getPerId,
};