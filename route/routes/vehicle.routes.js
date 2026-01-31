const router = require('express').Router();
const {
    addVehicle,
    assignDriver,
    getVehicles,
    
}= require('../controllers/vehicle.controller');
router.post('/addVehicle', addVehicle);
router.post('/assignDriver', assignDriver);
router.get('/getVehicles', getVehicles);    
module.exports = router;