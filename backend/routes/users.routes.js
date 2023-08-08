const {Router} = require('express');
const {getUser,addTask} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/user-profile', authUserMiddleware, getUser);
router.get('/add_task', authUserMiddleware, addTask);

module.exports = router;