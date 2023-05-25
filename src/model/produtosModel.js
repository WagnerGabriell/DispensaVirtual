const knex = require("./connection");

const getAllAndDespensa = async (idUser) =>{
    const produtos = await knex("produtos").select("produtos.id as IdProdutos", "produtos.nome as NomeProduto" ,"quantidade","dataDeValidade", "produtos.user_id","produtos.img as ImgProduto", "local_id", "categoria_id", "local.nome as NomeDespensa", "local.img as ImgDespensa").
    innerJoin("local", "produtos.local_id", "local.id").where({"produtos.user_id":idUser});
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
    return [item];
};

const getProdutosPerLocal = async (local) =>{
    const item = await knex("produtos").select("id", "nome" ,"quantidade","dataDeValidade","user_id","img","local_id", "categoria_id").where({local_id:local});
    return item;
};

const getProdutosPerId = async (idproduto) =>{
    const item = await knex("produtos").select("produtos.id as IdProduto", "produtos.lote as LoteProduto", "produtos.marca as MarcaProduto", "produtos.unidade as UnidadeProduto","produtos.nome as NomeProduto" ,"quantidade","dataDeValidade", "produtos.user_id","produtos.img as ImgProduto", "local_id", "categoria_id", "local.nome as NomeDespensa", "local.img as ImgDespensa", "categorias.nome as NomeCategoria", "categorias.img as ImGCategoria")
    .innerJoin("local","produtos.local_id", "local.id").innerJoin("categorias", "produtos.categoria_id", "categorias.id").where({"produtos.id": idproduto});
    return item;
}

const updateProduto = async (idProduto, newdata) =>{
    const {nome,lote,dataDeValidade,unidade,quantidade,marca,local_id,categoria_id,img}  = newdata;
    const item = await knex("produtos").update({nome:nome, lote:lote, dataDeValidade:dataDeValidade, unidade:unidade, quantidade:quantidade, marca:marca, local_id:local_id,categoria_id:categoria_id,img:img}).where({id:idProduto})
    return item;
};

module.exports = {
    getAllAndDespensa,
    newProduto,
    deleteProduto,
    getProdutosPerCategoria,
    getProdutosPerLocal,
    getProdutosPerId,
    updateProduto,
}