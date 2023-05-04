const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(id){
    return jwt.sign({id},process.env.SECRET,{expiresIn: 86400});
};

const registerUser = async(req,res) => {
    const query = await userModel.findEmail(req.body);
    if(query.length > 0){
        return res.status(400).json({message:"Usuario Existente"});
    }else if(query.length == 0){

        if(req.body.email != req.body.confirmeEmail)
            return res.status(400).json({message: "O email de confirmação é diferente do primeiro email informado"});
        else if(req.body.senha != req.body.confirmeSenha)
            return res.status(400).json({message: "A senha de confirmação é diferente da primeira senha informado"});

        const newUser = await userModel.createUser(req.body);  
        return res.status(201).json({message:"User Created", token:generateToken(newUser[0].id)});
    
    }
};

const authentication = async(req, res)=>{
    const query = await userModel.findUser(req.body);
    if(query.length < 1)
        return res.status(400).json({message:"Not found", query:query});
    else{
        query[0].senha = undefined; 
        return res.status(200).json({message:"User found", query:query, token:generateToken(query[0].id)});
    }
}

module.exports = {
    authentication,
    registerUser,
}