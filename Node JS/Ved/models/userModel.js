const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Model :-  collection Name (user)

const User = mongoose.model('user', userSchema);
module.exports = User