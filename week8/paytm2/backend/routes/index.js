const {Router} = require('express');
const zod = require('zod')
const jwt = require('jsonwebtoken')
const userRouter = Router();
const User = require('../db');
const JWT_SECRET = require('../config');
const { authHeader, userAuth } = require('../middlewares/userAuth');
const UserSchemas = zod.object({
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string(),
    email:zod.string().email()
})
userRouter.post("/signup",userAuth,async (req,res)=>{
    const body = req.body;
    const {success} = UserSchemas.safeParse(body);
    if(!success){
        res.json({
            message:"Email already in use"
        })
        return ;
    }
    const user = User.findOne({
        email:body.email
        
    })
    if(user._id){
        return res.json({
            message:"email already taken"
        })
    }
    const dbUser = await User.create(body);
    const token = jwt.sign({userId:dbUser._id},JWT_SECRET)
    res.json({
        message:"user created sucessfully",
        token:token
    })
})

userRouter.post("/signin",userAuth,async (req,res)=>{
    try{
        const body = req.body;
        const {success} = UserSchemas.safeParse(body)
        if(!success){
           res.status(403).send("not good")

        }
        const dbUser = await User.create(body);
        res.json({
            message:"signeed in"
        })
   

    }catch(err){
        res.send(err)
    }
   

})

userRouter.get("/bulk",userAuth,async(req,res)=>{
    const filter = req.query.filter||"";
    const users = await User.find({
        $or:[{
            firstName:{
              "$regex":filter,
            },
            lastName:{
                "$regex":filter,
            }
        }]
    })
    res.send({
        user :users.map((user)=>({
            username:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})


module.exports={
    userRouter
}