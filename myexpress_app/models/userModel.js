const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Provide an Email'],
        unique: [true, 'Email Already Exists']
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password'],
        minlength: 6,
        unique: false
    }
});

module.exports = mongoose.model.Users || mongoose.model('Users', UserSchema);