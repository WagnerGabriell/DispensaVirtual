const knex = require("./connection");

const getAll = async (idUser) =>{
    const produtos = await knex("produtos").select("id", "nome" ,"quantidade","dataDeValidade","user_id","img","local_id", "categoria_id").where({user_id:idUser});
    return produtos;
}

const newProduto = async (produto, userid) => {
    const {nome, lote, quantidade, marca, unidade, dataDeValidade, categoria_id, local_id, img} = produto;
    const nProduto = await knex("produtos")
    .insert({nome:nome, lote:lote, quantidade: quantidade, marca: marca, unidade:unidade,dataDeValidade:dataDeValidade, categoria_id: categoria_id, local_id:local_id, user_id: userid, img:img});
    return nProduto;                                            
};
const deleteProduto = async (produto) =>{
    const { id } = produto;
    return await knex("produtos").where({id:id}).del();
};

const getProdutosPerCategoria = async (categoria) =>{
    const item = await knex("produtos").select("id", "nome" ,"quantidade","dataDeValidade","user_id","img","local_id", "categoria_id").where({categoria_id:categoria});
    return item;
};

const getProdutosPerLocal = async (local) =>{
    const item = await knex("produtos").select("id", "nome" ,"quantidade","dataDeValidade","user_id","img","local_id", "categoria_id").where({local_id:local});
    return item;
};

const getProdutosPerId = async (idproduto) =>{
    const item = await knex("produtos").select().where({id: idproduto});
    return item;
}

module.exports = {
    getAll,
    newProduto,
    deleteProduto,
    getProdutosPerCategoria,
    getProdutosPerLocal,
    getProdutosPerId,
}