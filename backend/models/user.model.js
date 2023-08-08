const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter your Name',
    trim: true
  },

  email: {
    type: String,
    required: 'Please enter an email',
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },

  password: {
    type: String,
    required: 'Please enter password',
    trim: true,
  },

  tasks:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tasks'
  }],
})

const User = mongoose.model('User', users);

module.exports = User;