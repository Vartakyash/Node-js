const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/crud')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

//paste in insert document
// /** 
// * Paste one or more documents here
// */
// {
//     "_id": {
//       "$oid": "66d62ead89e1eb74a23f63a4"
//     },
//     "name":morgan,
//     "age":45
//   }

const UserModel = mongoose.model("users",UserSchema)

app.get("/getUser",(req,res)=>{
    UserModel.find().then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log (err)
    })

})
app.listen(3001,()=>{
    console.log("Server running on port 3001")
})