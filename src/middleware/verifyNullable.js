const verifyNullable = (req, res, next) => {
    const bodyReqNome = req.body.nome;

    if(bodyReqNome == "")
        return res.status(400).json({message: "O campos nome não pode estar vazios"});
    else if (bodyReqNome == undefined)
        return res.status(400).json({message: "O campo nome é obrigatorio"});
    else        
        return next();
};


module.exports = {
    verifyNullable,
}