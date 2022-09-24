const jwt = require('jsonwebtoken');

function check(req,res,next){
    const token = req.header('x-auth-token')
    if(!token){
        res.status(401).json({msg:"Não autorizado"});
    }else{
        try{
            const decoded = jwt.verify(token,"segredo");
            req.user = decoded
            next()
        }catch(error){
            res.status(400).json({msg:"Token invalido"})
        }
    }
}

module.exports = check;