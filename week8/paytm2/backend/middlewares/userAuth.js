const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function userAuth(req,res,next){
    const authHeader = req.header.authorization;
    if(!authHeader||!authHeader.startsWith('Bearer ')){
        return res.status(403).json({})
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwr.verify(token,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(err){
        return res.status(403).json({})
    }
    }

    module.exports={
        userAuth
    }