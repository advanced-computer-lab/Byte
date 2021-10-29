const express = require('express');
const router = express.Router();

const User = require('../models/user.js')

//returns all users in database

router.get('/', (req, res) => {
    User.find({}).then( result => res.send(result)).catch(console.error);
});

module.exports = router;