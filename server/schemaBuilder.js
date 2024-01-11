import mongoose from 'mongoose'

const schemaBuilder = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    address:{type:String},
    email:{type:String},
})

const schemaModel = new mongoose.model("schemaB",schemaBuilder)

export default schemaModel
