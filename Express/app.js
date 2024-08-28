//npm init to be used after cd Express
//npm install express after cd Express
// npm i nodemon after cd Express
//npm install -g nodemon
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
//nodemon app.js
//post man will only run when we have done nodemon app.js after cd Express
//After terminal says Server is running on port 80 open browser type localhost:80
//We can type localhost/about or localhost/contact 
//*************************************************//
//In postman we can type localhost/contact but we will get 'Contact Page PostApi' in console when we use POST
//instead of GET
// because we are using app.post
//app.post(('/contact'),(req,res)=>{
//     res.status(404).send('Contact Page PostApi')
// })


const express = require('express')

const app = express();
port = 80;

app.get(('/'),(req,res)=>{
    res.send('Home Page')
})

app.get(('/about'),(req,res)=>{
    res.send('About Page')
})

app.get(('/contact'),(req,res)=>{
    res.status(404).send('Contact Page yashvartak')
})

app.post(('/contact'),(req,res)=>{
    res.status(404).send('Contact Page PostApi')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})