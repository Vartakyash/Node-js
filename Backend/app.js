//npm init to be used after cd Static-Express
//npm install express after cd Static-Express
// npm i nodemon after cd Static-Express
//npm install -g nodemon
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
//nodemon app.js
//npm install pug --save

const express = require('express');
const path = require("path");
const app = express();
port = 5000;

//For serving static Files
app.use('/static',express.static('static'))

app.set('view engine','pug');// set the template engine as pug

app.set('views',path.join(__dirname,'views'));// set the view directory

//our pug demo endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo', {title: 'First Pug Page',message:'Pug Page',mq:'Breaking News',msg:'hello'})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
