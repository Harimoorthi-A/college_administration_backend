const mongoose=require('mongoose')

// schema
const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const users=mongoose.model("users",userSchema)

module.exports=users