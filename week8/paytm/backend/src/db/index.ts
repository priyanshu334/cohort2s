import mongoose from "mongoose";

main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/paytm')
}


import { Schema } from "mongoose"

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
       type:String,
       requred:true,
    },
    lastName:{
        type:String
    }
})

const model = mongoose.model('user',userSchema);
module.exports={
    model
}