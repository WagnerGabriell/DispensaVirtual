const userModel = require("../model/userModel");

const authentication = async(req, res)=>{
    const query = await userModel.findUser(req.body);
    if(query.length > 0){
        return res.status(200).json({message:"User found", query:query});
    }else if(query.length == 0){
        return res.status(400).json({message:"Not found", query:query});
    }
}

module.exports = {
    authentication,
}