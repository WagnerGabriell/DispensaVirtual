const knex = require("./connection");

const getAll = async() =>{
    const local = await knex("local");
    return local
};
const newLocal = async (local, userid) =>{
    const {nome} = local;
    const nlocal = await knex("local").insert({nome:nome, status:true, user_id: userid});
    return nlocal;
};
const getPerUser = async (userid) => {
    const userId = userid;
    const locais = await knex("local").select().where({user_id: userId});
    return locais;
};

module.exports = {
    getAll,
    newLocal,
    getPerUser,
    getPerUser,
}

