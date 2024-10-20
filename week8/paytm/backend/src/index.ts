import express from 'express';
const app = express();
import bodyParser = require('body-parser');

app.use()

app.use(bodyParser.json());



app.get("/",(req,res)=>{
    res.send("hello")
})



app.listen(3000,()=>{
    console.log("listning at 3000")
})