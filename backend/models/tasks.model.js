const mongoose = require('mongoose');

const tasks = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter title',
    trim: true
  },

  description: {
    type: String,
    required: 'Please enter description',
    trim: true,
    
  },

  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },


})

const Tasks = mongoose.model('Tasks', tasks);

module.exports = Tasks;