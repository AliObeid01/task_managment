
const User = require("../models/user.model");
const Task = require("../models/task.model");

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user);
}

const addTask = async (req, res) => {
    const {title, description,due_date} = req.body;
    try{
    const task = new Task();
    task.title = title;
    task.description = description;
    task.due_date= due_date;
    await task.save();
    await User.findByIdAndUpdate(req.user._id, {$push: {tasks: task._id}});
    res.json({data: task});
    } catch(err) {
        res.status(400).json({
          message: err.message
        });
    }
}

const getTask = async (req, res) => {
    const task_id = req.body.task_id
    const task = await Task.findById(task_id);
    res.json({data: task});
}

const getTasks = async (req, res) => {
    const tasks = await User.findById(req.user._id).populate("tasks");
    res.json({data: tasks});
}

const editTask = async (req, res) => {
    const {task_id,title,description,due_date} = req.body
    await Task.findByIdAndUpdate(task_id, {title:title,description:description,due_date:due_date});
    res.json({message: "Task has been edited"});
}

const deleteTask = async (req, res) => {
    const task_id = req.body.task_id
    await Task.deleteOne({ _id: task_id });
    await User.findByIdAndUpdate(req.user._id, {$pull: {tasks: task_id}});
    res.json({message: "Task has been deleted"});
}

const completeTask = async (req, res) => {
    const task_id = req.body.task_id
    await Task.findByIdAndUpdate(task_id, {status:1});
    res.json({message: "Task has been completed"});
}

const getCompletedTask = async (req, res) => {
    const tasks = await User.findById(req.user._id).populate({
        path: 'tasks',
        match: { status: 1 },
      });
    res.json({data: tasks});
}

const filterTasks = async (req, res) => {
    const due_date = req.body.due_date
    const tasks = await User.findById(req.user._id).populate({
        path: 'tasks',
        match: { due_date: due_date },
      });
    res.json({data: tasks});
}

module.exports = {
  getUser,
  addTask,
  getTasks,
  editTask,
  getTask,
  deleteTask,
  completeTask,
  getCompletedTask,
  filterTasks
}
