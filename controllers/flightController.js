const express = require('express');
const router = express.Router();

const Flight = require('../models/flight.js')

//returns all users in database

router.get('/', (req, res) => {
    Flight.find({}).then( result => res.send(result)).catch(console.error);
});

module.exports = router;