const {Admin} = require("../db")
const AdminMiddleware = async (req,res,next)=>{
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const value = await Admin.findOne({
            username:username,
            password:password,
            
        })
        if(value){
            next();
        }else{
            throw new Error("user doesnot exist")
        }
    

    }catch(err){
        res.status(404).send(err.message)
    }
   

}

module.exports = AdminMiddleware;