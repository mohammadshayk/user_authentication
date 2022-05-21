const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const User = require('./models/User');

const app = express();

const initializePassport = require('./password-config')
initializePassport(
    passport,
    async(email) => {
    
    }
)

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
express.static('public');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

mongoose
    .connect('mongodb+srv://user_auth:P0tat0m0m@cluster0.eyg4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server up at Port: 5000')
        })
    })


