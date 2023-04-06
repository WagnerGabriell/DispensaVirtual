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
const updatelocalname = async (local, idlocal) =>{
    const {nome} = local;
    const uplocal = await knex("local").where({id: idlocal}).update({nome:nome});
    return uplocal;
};

const updatelocalstatus = async (idlocal) => {
    const localselect = await knex("local").where({id:idlocal});

    if(localselect[0].status == true){
        const uplocal = await knex("local").where({id:idlocal}).update({status:false});
        return uplocal;
    }else{
        const uplocal = await knex("local").where({id:idlocal}).update({status:true});
        return uplocal;
    }
};

const deletelocal = async (local) => {
    const delLocal = await knex("local").where({id:local}).del();
    return delLocal;
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

