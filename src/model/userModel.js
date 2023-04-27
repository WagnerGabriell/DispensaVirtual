const knex  = require("./connection");

const getAll = async () =>{
     const users = await knex("users");
     return users;
};
const createUser = async (user) =>{
    const { email, senha} = user;
    const newUser = await knex("users").insert({email:email,senha:senha});
    return newUser;
};
const deleteUser = async (user) =>{
    const delUser = await knex("users").where({id:user}).del();
    return delUser;
};
const findUser = async (user) => {
    const {email, senha} = user;
    const query = await knex("users").select().where({email:email,senha:senha});
    return query;
};
const findEmail = async (user) => {
    const {email} = user;
    const query = await knex("users").select().where({email:email});
    return query;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    findUser,
    findEmail,
};