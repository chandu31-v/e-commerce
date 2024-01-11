import mongoose from 'mongoose'
//import path from 'path'
import express from 'express'
import schema from './schemaBuilder.js'
import storiesRoute from './routes/stories.js'

//const path = require('path')
//const express = require('express')
const app = express()

//routing
app.use('/stories',storiesRoute)

//connnect to mongoDb
mongoose.connect("mongodb://127.0.0.1:27017/chandu")
.then(()=>console.log("connected"))
.catch((err)=>console.log(err))


//CRUD
//1.Create
const create = async()=>{
    try{
        const user = new schema({
            name:"chandu",
            age:21,
            address:"sarjapura",
            email:"chandu@gmail.com"
        })
        const userSaved = user.save()
    }catch(err){
        console.log(err)
    }
}
//2.Read
const read = async()=>{
    try{
        const user = await schema.findOne({name:"chandu"})
        console.log(user)

    }catch(err){
        console.log(err)
    }
}
//3.Update
const update = async()=>{
    try{
        const user = await schema.updateOne({name:"chandu"},{age:22})
        //schema.updateOne({filter},{value_to_update})
        console.log(user)
    }catch(err){
        console.log(err)
    }
}
//4.Delete
const deletes = async()=>{
    try{
        const user = await schema.deleteOne({name:"chandu"})
        console.log(user)
    }catch(err){
        console.log(err)
    }
}

//create()
//read()
//update()
//deletes()


app.listen(4001)
