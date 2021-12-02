const express = require('express');
const router = express.Router();
const app = express();
const Flight = require('../models/flight.js')
router.use(express.urlencoded({extended: true})); 
router.use(express.json());

router.get('/', (req, res) => {
    Flight.find({}, function(err, flights) {
        if (!err) { 
            res.render('\searchResult', {flights});
        }
        else {
            throw err;
        }
    });
});

module.exports = router;