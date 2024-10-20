const express = require('express')
const bodyParser = require('body-parser')
const { userRouter } = require('./routes')
const cors = require('cors')

const app = express()
app.use("/user",userRouter)
app.use(cors())

app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("port is running")
})