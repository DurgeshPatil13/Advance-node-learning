const mongoose=require("mongoose");
const { number, email } = require("zod");
const { string, required } = require("zod/mini");
const userSchema=new mongoose.schema({
    name:{
        type:string,
        required:true
    },
    age:{
   type:number,
        required:true
    },
    email:{
        type:email,
        required:true
    }
})
const user=mongoose.model("user",userSchema);
module.exports=user;