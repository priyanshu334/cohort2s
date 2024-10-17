const mongoose = require('mongoose');
const {Schema} = require('mongoose')


try{
    async function main(){
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/test2'
        )
    }

}catch(err){
    console.log(err)
}

const TodosSchema = new Schema({
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false

    }

},)

const Todo = mongoose.model('Todo',TodosSchema);
module.exports ={
    Todo
}