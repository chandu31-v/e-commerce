import mongoose from "mongoose";

const schema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("Schema",schema)
