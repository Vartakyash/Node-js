//npm i mongoose after cd server
//npm init to be used after cd server
//npm install express after cd server
// npm i nodemon after cd server
//npm install -g nodemon
//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
//nodemon index.js
//post man will only run when we have done nodemon index.js after cd server

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/crud");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const UserModel = mongoose.model("users", UserSchema);

// Display All Data
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
});

// GET Route for a single user by ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    
    UserModel.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving user');
        });
});

// Create Route
app.post('/createUser', (req, res) => {
   const { name, email, age } = req.body; // Destructuring from the body to pass through postman

//    name: "test", email: "test123@gmail.com", age:24    For Block data
    UserModel.create({name ,email ,age  })
        .then(user => res.json(user))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating user');
        });
});

// Update Route Through Id : 
app.put('/updateUser/:id', (req, res) => {
    const userId = req.params.id; // Extract ID from route parameters
    const { name, email, age } = req.body;

    UserModel.findByIdAndUpdate(userId, { name, email, age }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.json(user);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error updating user');
        });
});


// Delete Route Id
app.delete('/deleteUser/:id', (req, res) => {
    const userId = req.params.id;

    UserModel.findByIdAndDelete(userId)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.json({ message: 'User deleted successfully', user });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting user');
        });
});

// DELETE Route to delete all users
app.delete('/deleteAllUsers', (req, res) => {
    UserModel.deleteMany({})
        .then(result => res.json({ message: 'All users deleted successfully', result }))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting all users');
        });
});

// GET Route for the total number of users
app.get('/totalUsers', (req, res) => {
    UserModel.countDocuments({})
        .then(count => res.json({ totalUsers: count }))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving user count');
        });
});

// Port Listening
app.listen(3000, () => {
    console.log("Started running on Port : 3000");
});
