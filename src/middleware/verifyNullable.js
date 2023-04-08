const verifyNullable = (req, res, next) => {
    const body = req.body.nome;

    if(body == null || body == "" || body == undefined)
        return res.status(401).json({message: "Ha campos obrigatorios vazios"});
    else
        return next();
};

module.exports = {
    verifyNullable,
}