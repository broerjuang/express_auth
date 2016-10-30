'use strict'

const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:3000/user');


const userSchema = mongoose.Schema({
  username  : String,
  password  : String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
