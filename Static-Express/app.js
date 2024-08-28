//npm init to be used after cd Static-Express
//npm install express after cd Static-Express
// npm i nodemon after cd Static-Express

const express = require('express');
const path = require("path");
const app = express();
port = 80;

//For serving static Files
app.use('/static',express.static('static'))

app.set('view engine','pug');// set the template engine as pug

app.set('views',path.join(__dirname,'views'));// set the view directory

//our pug demo endpoint
app.get('/demo',(req,res)=>{
    res.status(200).render('demo', {title: 'First Pug Page',message:'Pug Page',mq:'Breaking News'})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
