const express = require('express')
const body_parser = require('body-parser')
const app = express()
app.use(body_parser.json())

const PORT = 3000


app.get('/',async (req,res)=>{
    res.send("<h1>Hello world</h1>")
})
app.post("/asd",(req,res)=>{
    console.log(req.body);
    res.send({
        t1:"hello"
    })
})

app.listen(PORT,()=>{
    console.log("listning at port")
})