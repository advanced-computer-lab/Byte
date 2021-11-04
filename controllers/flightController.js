const express = require('express');
const router = express.Router();
const app = express();

const Flight = require('../models/flight.js')

//middlewares
router.use(express.urlencoded({extended: true})); 
router.use(express.json());

//returns all users in database
router.get('/', (req, res) => {
    Flight.find({}, function(err, all_flights) {
        if (!err) { 
            res.render('\list', {all_flights});
        }
        else {
            throw err;
        }
    });
    //console.log(all_flights);
    //res.render('\list', {all_flights});
});

module.exports = router;