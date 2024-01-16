// middleware
const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
  },
  firstName:{
    type:String,
    required:true,
    minLength: 3,
    maxLength:13,
  },
  password:{
    type:String,
required:true,

  },
  age:{
    type:Number,
    minLength:13,
  },
})


const User=mongoose.model("User",userSchema);
module.exports=User;