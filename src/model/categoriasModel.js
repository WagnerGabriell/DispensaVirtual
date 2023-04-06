const knex =  require("./connection");

const getAllCategorias = async () => {
    const categorias = await knex("categorias");
    return categorias;
};

const createCategorias = async (categoria, id_user) => {
    const { nome, img } = categoria;
    const newcategoria = await knex("categorias").insert({nome:nome, img:img, user_id: id_user});
    return newcategoria;
};

const getCategoriasPerUser = async (id_user) => {
    const categorias = await knex("categorias").where({user_id: id_user});
    return categorias;
};

const updateCategoriasName = async (categoria, id_categorias) => {
    const {nome} = categoria;
    const upCategoria = await knex("categorias").where({id:id_categorias}).update({nome:nome});
    return upCategoria;
};

module.exports = {
    getAllCategorias,
    createCategorias,
    getCategoriasPerUser,
    updateCategoriasName,
}