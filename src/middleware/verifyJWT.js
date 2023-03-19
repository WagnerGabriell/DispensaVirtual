const jwt = require("jsonwebtoken");
require("dotenv").config();

const authmid = (req,res,next) =>{
    const token = req.headers.authorization;

    if(!token)
        return res.status(401).json({message: "no token provided"});

    jwt.verify(token, process.env.SECRET,(err, decoded) =>{
        if(err)
            return res.status(401).json({emssage: "token invalid"});
        req.id = decoded.id;
        return next();
    })
};

module.exports = {
    authmid,
}
