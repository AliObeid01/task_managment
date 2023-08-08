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

})

const Task = mongoose.model('Task', tasks);

module.exports = Task;