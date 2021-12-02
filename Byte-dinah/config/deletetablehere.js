const mongoose = require('mongoose');
const connectDB = require('./db');
const Flight = require('../models/flight.js')

//connect Database
connectDB();

Flight.collection.drop();
