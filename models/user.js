const mongoose=require("mongoose");
const { number, email } = require("zod");
const { string, required } = require("zod/mini");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
   type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
const user=mongoose.model("user",userSchema);
module.exports=user;