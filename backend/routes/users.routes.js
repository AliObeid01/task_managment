const {Router} = require('express');
const {getUser,addTask,getTask,getTasks,editTask} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/user-profile', authUserMiddleware, getUser);
router.post('/add_task', authUserMiddleware, addTask);
router.get('/task', authUserMiddleware, getTask);
router.get('/tasks', authUserMiddleware, getTasks);
router.post('/edit_task', authUserMiddleware, editTask);

module.exports = router;