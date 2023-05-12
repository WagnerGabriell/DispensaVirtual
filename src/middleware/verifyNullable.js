const UpdateLocalECategoria = (req, res, next) => {
    const bodyReqNome = req.body.nome;

    if(bodyReqNome == "")
        return res.status(400).json({message: "O campo nome não pode estar vazio"});
    else if (bodyReqNome == undefined)
        return res.status(400).json({message: "O campo nome é obrigatorio"});
    else        
        return next();
};

const Produtos = (req, res, next) => {
    const { body } = req;

    if(body.nome == "")
        return res.status(400).json({message: "O campo nome não pode esta vazio"});
    else if (body.quantidade == "")
        return res.status(400).json({message: "O campo quantidade não pode esta vazio"});
    else if (body.img == "")
        return res.status(400).json({message: "O campo imagem não pode esta vazio"});
    
    if(body.nome == undefined)
        return res.status(400).json({message: "O campo nome é obrigatorio"});
    else if (body.quantidade == undefined)
        return res.status(400).json({message: "O campo quantidade é obrigatorio"});
    else if (body.img == undefined)
        return res.status(400).json({message: "O campo imagem é obrigatorio"});  
    
    next()
};

const Login = (req, res, next) => {
    const {body} = req;

    if(body.email == "")
        return res.status(400).json({message: "O campo email não pode estar vazio"});
    else if(body.senha == "")
        return res.status(400).json({message: "O campo senha não pode estar vazio"});
    
    if(body.email == undefined)
        return res.status(400).json({message: "O campo email é um campo obrigatorio"});
    else if(body.senha == undefined)
        return res.status(400).json({message: "O campo senha é um campo obrigatorio"});
        
    next();
};

const Register = (req, res, next) => {
    const { body } = req;

    if(body.email == "")
        return res.status(400).json({message: "O campo email não pode estar vazio"});
    else if(body.senha == "")
        return res.status(400).json({message: "O campo senha não pode estar vazio"});
    else if(body.confirmeEmail == "")
        return res.status(400).json({message: "O campo confirmar email não pode estar vazio"});
    else if(body.confirmeSenha == ""){
        return res.status(400).json({message: "O campo confirmar senha não pode estar vazio"});
    }
    
    if(body.email == undefined)
        return res.status(400).json({message: "O campo email é um campo obrigatorio"});
    else if(body.senha == undefined)
        return res.status(400).json({message: "O campo senha é um campo obrigatorio"});
    else if(body.confirmeEmail == undefined)
        return res.status(400).json({message: "O campo confirmar email é um campo obrigatorio"});
    else if(body.confirmeSenha == undefined){
        return res.status(400).json({message: "O campo confirmar senha é um campo obrigatorio"});
    }    
    next();
};

const LocalECategoria = (req, res, next) =>{
    const { body } = req;

    if(body.nome == "")
        return res.status(400).json({message: "O campo nome não pode estar vazio"});
    else if(body.img == "")
        return res.status(400).json({message: "O campo de imagem não pode estar vazio"});

    if(body.nome == undefined)
        return res.status(400).json({message: "O campo nome é obrigatorio"});
    else if(body.img == undefined)
        return res.status(400).json({message: "O campo de imagem é obrigatorio"});

    next()
}

const AlterarPassword = (req,res,next) => {

    const {body} = req;

    if(body.email == "")
        return res.status(400).json({ message: "O campo email não pode estar vazio"})

    if(body.email == undefined)
        return res.status(400).json({ message: "O campo email é obrigatorio"});

    next();
}

module.exports = {
    UpdateLocalECategoria,
    Produtos,
    Login,
    Register,
    LocalECategoria,
    AlterarPassword,
}