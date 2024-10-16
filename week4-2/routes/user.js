const {Router} = require("express");
const { User, Course } = require("../db");
const UserRouter = Router();
const userMiddleware = require("../middlewares/user");

UserRouter.post("/signup",async (req,res)=>{
    try{
        const username = req.body.username;
        const passowrd = req.body.passowrd;
        const createUser = await User.create({
            username:username,
            password:passowrd,
        })
        res.json({
            msg:ok
        })
        
    }catch(err){
        res.status(400).send(err.message);
    }
  

})
UserRouter.get("/courses", async (req,res)=>{
    const response = await Course.find( {
    
    })
    res.json({
        courses:response,
    })
    
  
})

UserRouter.post("/courses/:courseId",userMiddleware,async (req,res)=>{
    const courseId = req.params.courseId;
    const username = req.header.username;
    try{
        await User.updateOne({
            username:username,
          
        },  {
             "$push":{
                purchasedCourses:courseId,
             }
        })

    }catch(err){
        res.status(400).send(err.message)
    }
    
   

})
UserRouter.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const user = await User.findOne({
        username:req.header.username
    })
    const courses = await Course.find(  {
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        msg:courses,
    })

})

module.exports=UserRouter;