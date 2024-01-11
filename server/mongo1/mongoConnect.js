//1.connnect to mongoDB
//2.Use express to communicate to server

import mongoose from "mongoose";
import routerFile from "./expressRouter"
const express = require("express")

const app = express()

mongoose.connect("mongodb://localhost:27017")
const con = mongoose.connection
con.on("open",()=>{console.log("connected")})

app.use(express.json())
app.use("/value",routerFile)


app.listen(9000,()=>{console.log("Express Listening")})
