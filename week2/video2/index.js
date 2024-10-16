const express = require('express')
const app = express();
const zod = require("zod")
app.use(express.json())
const schema = zod.array(zod.number());


//email validation
const schemas = zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("us"))
})

app.get('/',(req,res)=>{
    const KidneyId = req.query.KidneyId;
    const response = schema.safeParse(KidneyId)
    const userId = req.headers.username;
    const password = req.headers.password;
    if(userId!='harkirat'&&password!='snshn'){
        res.status(403).send({
            msg:"user doesnot exist"
        })
        return;
    }
    res.send("bad request ")

})
//global chaches catches all the errors 
app.use((err,req,res,next)=>{
    res.json({
        msg:"sorry something went wrong"
    })
})


app.listen(3000,()=>{
    console.log("listning")
})