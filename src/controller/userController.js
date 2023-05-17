const { query } = require("express");
const userModel = require("../model/userModel");
const { param } = require("../routes");

const getAll = async (req, res) => {
    const users = await userModel.getAll();
    return res.status(200).json({users:users, id:req.id});
};
const createUser = async (req,res) => {
    const newUser = await userModel.createUser(req.body);    
    return res.status(201).json(newUser);
};
const deleteUser = async (req,res) => {
    const {id} = req.params;
    await userModel.deleteUser(id)
    return res.status(204).json();
};

const getcategoriaPerUser = async (req, res) => {
    const {id} = req.params;

    try{
        const query = await userModel.getcategoria(id);
        return res.status(200).json(query);
    }catch(erro){
        return res.status(400).json({message:erro});
    }
};



module.exports = {
    getAll,
    createUser,
    deleteUser,
    getcategoriaPerUser,
};