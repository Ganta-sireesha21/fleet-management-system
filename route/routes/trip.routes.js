const router = require('express').Router();
const {
    createTrip,
    endTrip,
}= require('../controllers/trip.controllers');
router.post('/createTrip', createTrip);
router.post('/end/:id', endTrip);  
module.exports = router;