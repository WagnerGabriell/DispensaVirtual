const knex = require("./connection");

const getAll = async() => {
    const local = await knex("local");
    return local
};

const newLocal = async (local, userid) =>{
    const {nome, img} = local;
    const nlocal = await knex("local").insert({nome:nome, status:true, img: img ,user_id: userid});
    return nlocal;
};

const updatelocalname = async (local, idlocal, idUser) =>{
    const {nome} = local;
    const uplocal = await knex("local").where({id: idlocal});

    if( uplocal[0].user_id == idUser)
        return await knex("local").where({id:idlocal}).update({nome:nome});
    else
        return [{message: "erro!! voce nào pode alterar o local de outro usuario"}];
};

const updatelocalstatus = async (idlocal, idUser) => {
    const localselect = await knex("local").where({id:idlocal});
    
    if(localselect[0].user_id == idUser)
        if(localselect[0].status == true)
            return await knex("local").where({id:idlocal}).update({status:false});

        else
            return await knex("local").where({id:idlocal}).update({status:true});
    else    
        return [{message: "erro!! voce não pode alterar o local de outro usuario"}];
};

const deletelocal = async (local, idUser) => {
    const delLocal = await knex("local").where({id:local});

    if(delLocal[0].user_id == idUser)
        return await knex("local").where({id:local}).del();
    else
        return [{message: "erro!! voce não pode deletar o local de outro usuario"}];
    
};

const getPerUser = async (userid) => {
    const userId = userid;
    const locais = await knex("local").select().where({user_id: userId});
    return locais;
};

module.exports = {
    getAll,
    newLocal,
    deletelocal,
    updatelocalname,
    updatelocalstatus,
    getPerUser,
}

