const express = require("express");
const app = express();
const UserModel = require('./models/User.model')
const connectDB = require("./config/Database")
app.use(express.json())
connectDB()

app.get("/",(req,res)=>{
    res.send("Someone is cooking")
})

app.post("/create",async(req,res)=>{
    const {name,age} = req.body;
    const user = await UserModel.create({
        name,
        age,
    })
    res.send({
        success:true,
        status:201,
        message:"Someone data is created", 
        data:user
    })
})


module.exports = app;