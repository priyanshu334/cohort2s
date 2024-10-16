const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const adminRouter = require("./middlewares/admin.js")
const UserRouter = require("./middlewares/user.js")
const PORT = 3000;
app.use(bodyParser.json());
app.use("/admin",adminRouter)
app.use("/user",UserRouter)

app.listen(PORT,()=>{
    console.log("listning at PORT")
})