import express from 'express'
const app = express()

app.get("/",(req,res)=>{
   res.json({
    msg:"good"
   })
})

app.listen(3000,()=>{
    console.log("listinig at port")
})