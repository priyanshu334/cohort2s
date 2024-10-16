const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')
app.use(express.json())//as it retures a function

const jwtpass ="123456"

const ALL_USERS =[{
    userName:"harkirat@gmail.com",
    password:"123",
    name:"harkirat singh"
},{
    userName:"harkirat@gmail.com",
    password:"123",
    name:"harkirat singh"

},
{
    userName:"harkirat@gmail.com",
    password:"123",
    name:"harkirat singh"
}
]

function userExist(username,password){

}

app.post('/signin',(req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    if(!userExist(userName,password)){
        return res.status(403).send({
            msg:"user doesnot exist"
        })
    }
    let token = jwt.sign({userName:userName},"shhhh")
    return res.json({
        token,
    })
})
app.get('/users',(req,res)=>{
    const token = req.header.authorization;
    try{
        const decoded = jwt.verify(token,jwtpass);

    }catch(err){
        res.send(err.message)
    }
})