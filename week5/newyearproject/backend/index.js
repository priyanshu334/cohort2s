const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { Todo } = require('./db');
const { createTodo, updateTodo } = require('./types');
const cors = reuire('cors')
app.use(cors())
const PORT = 3000;
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send({
        msg:"good"
    })
})
app.post("/todo",async (req,res)=>{
    try{

        const createPayload = req.body;
     const parsedPayload = createTodo.safeParse(createPayload);
     if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong information"
        })

        return;
     }
    await  Todo.create({
        title:parsedPayload.title,
        description:parsedPayload.description,
        completed:false,
     })
     res.send({
        msg:"created",
     })
    }catch(err){
        res.status(400).send(err.message)
    }
     


})
app.get("/todos",async (req,res)=>{
    const todos = await Todo.find({})
    res.json({
        todos:todos
    })
})
app.put("/completed",async (req,res)=>{
    try{
        const createPayload = req.body;
        const parsedPayload = updateTodo.safeParse(createPayload);
        if(!parsedPayload.success){
            throw new Error("wrong input")
            return;
        }
    await todo.update({
        _id:req.body.id
    },{
        completed:true,
    })
    res.json({
        msg:"completed"
    })
    }catch(err){
        res.status(400).send(err.message)
    }
  
    

})
app.listen(PORT,()=>{
    console.log("listning in port")
})