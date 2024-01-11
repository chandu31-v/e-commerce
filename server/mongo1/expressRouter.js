import schema from "./schema"

const express = require("express")
const router = express.Router()

router.get('/',async(req,res)=>{
    schema.find()
    schema.save()
    new schema({})
})
