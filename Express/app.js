//npm init to be used after cd Express
//npm install express after cd Express
//npm init to be used after cd Express
//npm install express after cd Express
// npm i nodemon after cd Express
//npm install -g nodemon
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
//nodemon .\app.js

const express = require('express')

const app = express();
port = 3000;

app.get(('/'),(req,res)=>{
    res.send('Home Page')
})

app.get(('/about'),(req,res)=>{
    res.send('About Page')
})

app.get(('/contact'),(req,res)=>{
    res.status(404).send('Contact Page')
})

app.get(('/contact'),(req,res)=>{
    res.status(404).send('Contact Page PostApi')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
