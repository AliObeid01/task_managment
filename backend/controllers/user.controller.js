
const User = require("../models/user.model");
const Task = require("../models/task.model");

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user);
}

const addTask = async (req, res) => {
    const {title, description,due_date} = req.body;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.due_date= due_date;
    await task.save();
    await User.findByIdAndUpdate(req.user._id, {$push: {tasks: task._id}});
    res.json({data: task});
}

const getTasks = async (req, res) => {
    const tasks = await User.findById(req.user._id).populate("tasks");
    res.json({data: tasks});
  }

module.exports = {
  getUser,
  addTask,
  getTasks
}
