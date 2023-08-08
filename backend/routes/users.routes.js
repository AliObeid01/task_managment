const {Router} = require('express');
const {getUser,addTask,getTasks} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/user-profile', authUserMiddleware, getUser);
router.post('/add_task', authUserMiddleware, addTask);
router.get('/tasks', authUserMiddleware, getTasks);

module.exports = router;