const knex = require("./connection");

const createItem = async(item, id_user) => {
    const { nome, quantidade, marca, img} = item;
    const newItem = await knex("listaCompras").insert({nome:nome, quantidade:quantidade, marca:marca, img:img ,user_id:id_user});
    return newItem;
};

const getPerUser = async(id_user) => {
    const query = await knex("listaCompras").select().where({user_id: id_user});
    return query;
};

const DeleteItem = async (id_user) =>{
    const query = await knex("listaCompras").where({id:id_user}).del();
    return query;
}
const itemInfo = async (idProduto)=>{
    const item = await knex("listaCompras").select().where({id:idProduto});
    return item;
}

module.exports = {
    createItem,
    getPerUser,
    DeleteItem,
    itemInfo,
}