const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main().catch(e => console.log(e));

const UserSchema = new Schema({
    firstName: {
        type:String,
        requied:true,
        trim:true,
        maxLength:true,



    }  ,// Fixed the typo
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    email: {
        type:String,
        required:true,

        
    },
    Password:{
        type:String,
        required:true,
        trim:true,
        maxLength:6
    },  // Changed to Number if you want age to be a number
});
const BankSchema = new Schema({
     userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
     }
     ,
     Balance:{
        type:Number,
        required:true,
     }

})
const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account',BankSchema);

// Export the User model
module.exports = {
    User,
    Account
};
