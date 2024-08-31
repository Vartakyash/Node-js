//npm init to be used after cd Static-Express
//npm install express after cd Static-Express
// npm i nodemon after cd Static-Express
//npm install -g nodemon
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
//nodemon app.js
//npm install pug --save

const express = require('express');
const path = require("path");
const fs = require('fs');

const app = express(); // Corrected syntax for app initialization
port = 80; 

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded()); 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); 

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is a Basic pug template for node.js";
    const params = { 'title': 'PuG template', "content": con };
    res.status(200).render('index.pug', params); 
});

app.post('/', (req, res) => {
    //console.log(req.body)
    const name = req.body.name; // Fixed syntax for assignment
    const age = req.body.age;
    const adr = req.body.adr;

    let outputwrite = `Name: ${name}, Age: ${age}, Address: ${adr}`; // Fixed template literals and syntax

    fs.writeFileSync('output.txt', outputwrite);
    console.log(req.body);

    const params = { 'message': 'Your Form has been submitted successfully' };
    res.status(200).render('index.pug', params); // Removed .pug extension in render

    console.log(params.message); // Fixed console.log usag
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
