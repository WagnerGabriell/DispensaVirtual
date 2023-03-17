const userModel = require("../model/userModel");
const { param } = require("../routes");

const getAll = async (req, res) =>{
    const users = await userModel.getAll();
    return res.status(200).json(users);
};
const createUser = async (req,res) => {
    const newUser = await userModel.createUser(req.body);    
    return res.status(201).json(newUser);
};
const deleteUser = async (req,res)=>{
    const {id} = req.params;
    await userModel.deleteUser(id)
    return res.status(204).json();
};
const registerUser = async(req,res)=>{
    const newUser = await userModel.findEmail(req.body);
    if(newUser.length > 0){
        return res.status(400).json({message:"Usuario Existente"});
    }else if(newUser.length == 0){
        const User = await userModel.createUser(req.body);    
        return res.status(201).json(User);
    }
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    registerUser,
};