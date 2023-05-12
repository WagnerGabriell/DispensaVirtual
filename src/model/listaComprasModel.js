const knex = require("./connection");

const createItem = async(item, id_user) => {
    const { nome, quantidade, marca} = item;
    const newItem = await knex("listaCompras").insert({nome:nome, quantidade:quantidade, marca:marca, user_id:id_user});
    return newItem;
};

const getPerUser = async(id_user) => {
    const query = await knex("listaCompras").select().where({user_id: id_user});
    return query;
};

module.exports = {
    createItem,
    getPerUser,
}