const knex  = require("./connection");

const getAll = async () =>{
     const users = await knex("users");
     return users;
};
const createUser = async (user) =>{
    const { email, senha, telefone} = user;
    const newUser = await knex("users").insert({email:email,senha:senha,telefone:telefone});
    return newUser;
};
const deleteUser = async (user) =>{
    const delUser = await knex("users").where({id:user}).del();
    return delUser;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
};