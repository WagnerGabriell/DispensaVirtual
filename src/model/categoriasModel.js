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
    const categorias = await knex("categorias").select("id","nome","img","user_id").where({user_id: id_user});
    return categorias;
};

const updateCategoriasName = async (categoria, id_categorias) => {
    const {nome, img} = categoria;
    const upCategoria = await knex("categorias").where({id:id_categorias}).update({nome:nome, img:img});
    return upCategoria;
};
const deleteCategoria = async (categoria) =>{
    const delCategoria = await knex("categorias").where({id:categoria}).del();
    return delCategoria;
}; 
const getCategoriaPerId = async (idCategoria) => {
    const item = await knex("categorias").select().where({id:idCategoria});
    return item;
};

module.exports = {
    getAllCategorias,
    createCategorias,
    getCategoriasPerUser,
    updateCategoriasName,
    deleteCategoria,
    getCategoriaPerId,
}