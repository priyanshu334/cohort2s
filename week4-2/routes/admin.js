const {Router}= require('express')
const AdminMiddleware = require("../middlewares/admin.js");
const { Admin, Course } = require('../db/index.js');
const AdminRouter = Router();

AdminRouter.post("/signup",async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const create = await Admin.create({
            username:username,
            password:password
        })
        if(!create){
            throw new Error("failed")
        }
        res.json({
            msg:"done"
        })
       
    }catch(err){
        res.status(400).send(err.message)
    }
    
    //check if user with this username already exists 

})
AdminRouter.post("/courses",AdminMiddleware,async (req,res)=>{
     try{
        const title = req.body.title;
        const description = req.body.description;
        const imageLink = req.body.imageLink;
        const price = req.body.price;
      const newCourse =   await Course.create({
            title:title,
            description:description,
            imageLink:imageLink,
            price:price
        })
         res.json({
            msg:"Course Created sucesfullt",CourseId:newCourse._id
         })

     }catch(err){
        res.status(400).send(err.message)
     }
})
AdminRouter.get("/courses",AdminMiddleware,async (req,res)=>{
    const response = await Course.find({});//finds all the course with the Admin id and passowrd
    res.json({
        Courses:response    
    })
})

module.exports= AdminRouter;