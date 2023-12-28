const express = require('express');
const mongoose = require('mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const User = require('./models/userModel');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


 

const newUser = new User({
    email: 'peter@gmail.com',
    password: 'haroon12345'
}); 

newUser.save()
    .then(user => console.log(user))
    .catch(error => console.error(error));



const path = require('path');
app.set('views', path.join(__dirname, 'views'));


// EJS setup
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.set('layout', 'layouts/layout');


// Static files
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Server start
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));


















