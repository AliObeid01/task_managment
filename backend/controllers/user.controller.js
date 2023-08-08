
const User = require("../models/user.model");
const Task = require("../models/task.model");

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user);
}

const addTask = async (req, res) => {
    const {title, description} = req.body;
    const task = new Task();
    task.title = title;
    task.description = description;
    await task.save();
    await User.findByIdAndUpdate(req.user._id, {$push: {tasks: task._id}});
    res.json({data: task});
  }

module.exports = {
  getUser,
}
