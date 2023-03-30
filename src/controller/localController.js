const localmodel = require("../model/localModel");

const getAll = async (req, res)=>{
    const locais = await localmodel.getAll();
    return res.status(200).json(locais);
};

const createLocal = async (req,res) =>{
    const id_user = req.id;
    const newlocal = await localmodel.newLocal(req.body, id_user);
    return res.status(200).json(newlocal);
};
const getLocalPerUser = async (req, res) => {
    const id_user = req.id;
    const querylocal = await localmodel.getPerUser(id_user);
    return res.status(200).json(querylocal);
}

module.exports = {
    getAll,
    createLocal,
    getLocalPerUser,
}