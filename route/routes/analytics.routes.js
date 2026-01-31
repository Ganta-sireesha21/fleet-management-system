const router = require('express').Router();
const limmiter = require('../middlewares/rateLimiter.middlewares');
const {analytics}= require('../controllers/analytics.controllers');
router.get("/", limmiter, analytics);
module.exports = router;