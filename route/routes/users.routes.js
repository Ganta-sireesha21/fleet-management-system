const router = require('express').Router();
const {registerUser} = require('../controllers/users.controller');
const rateLimiter = require('../middlewares/rateLimiter.middlewares');

router.post('/register', rateLimiter, registerUser);    
module.exports = router;