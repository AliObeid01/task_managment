const {Router} = require('express');
const {getUser,addTask,getTask,getTasks,editTask,deleteTask,completeTask,getCompletedTask,filterTasks} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/user-profile', authUserMiddleware, getUser);
router.post('/add_task', authUserMiddleware, addTask);
router.post('/task', authUserMiddleware, getTask);
router.get('/tasks', authUserMiddleware, getTasks);
router.post('/edit_task', authUserMiddleware, editTask);
router.post('/delete_task', authUserMiddleware, deleteTask);
router.post('/complete_task', authUserMiddleware, completeTask);
router.get('/completed_tasks', authUserMiddleware, getCompletedTask);
router.post('/filter', authUserMiddleware, filterTasks);

module.exports = router;