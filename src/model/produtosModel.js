const knex = require("./connection");

const getAll = async () =>{
    const produtos = await knex("produtos");
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

module.exports = {
    getAll,
    newProduto,
    deleteProduto,
}