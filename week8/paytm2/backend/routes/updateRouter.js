const {Router} = require('express')
const updateRouter = Router()
const {User} = require("../db")

const zod = require('zod')

const updateBody =zod.object({
    password:zod.string().optional(),
    firtName:Zod.string().optional(),
    lastName:zod.string().optional(),
})

updateRouter.put("/",async(req,res)=>{
   const body = req.body;
   const {sucess} = updateBody.safeParse(body);
   if(!sucess){
    res.status(411).json({
        message:"Error while updating the information"
    })
    await User.updateOne(body,{
        id:req._id
    })
    res.json({
        msg:"updated success"
    })
   }
})