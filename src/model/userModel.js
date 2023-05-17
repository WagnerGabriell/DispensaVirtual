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
const insertToken = async (user, token, date)=>{
    const {id} = user;
    const insert = await knex("users").where({id:id}).update({token:token, expiresToken:date});
    return insert;
}
const serchUserPerToken = async (token) =>{
    const query = await knex("users").select().where({token:token});
    return query;
}

const updatePassword = async (newPassword, token) => {
    const updateuser = await knex("users").update({senha: newPassword}).where({token:token});
    return updateuser;
};

const getcategoria = async (user) =>{
    const itens = await knex("users").select("categorias.id", "categorias.nome", "categorias.img").innerJoin("categorias","users.id", "categorias.user_id").where({"users.id": user});
    return itens;
}

module.exports = {
    getAll,
    createUser,
    deleteUser,
    findUser,
    findEmail,
    insertToken,
    serchUserPerToken,
    updatePassword,
    getcategoria,
};