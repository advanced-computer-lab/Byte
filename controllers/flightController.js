const express = require('express');
const router = express.Router();
const app = express();
const Cabin = require('../models/Cabin.js');
const Flight = require('../models/flight.js');

//middlewares
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var id;

//returns all users in database

router.get('/', (req, res) => {
  Flight.find({}, function (err, all_flights) {
    if (!err) {
      res.render('list', { all_flights });
    } else {
      throw err;
    }
  });
  //console.log(all_flights);
  //res.render('\list', {all_flights});
});
const getDepartureFlights = (req, res) => {
  //console.log("Im here");
  Flight.find({}).then((result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });
};

const getArrivalFlights = (req, res) => {
  Flight.find({}).then((result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });
};

const getDepartureCabins = (req, res) => {
  const my_ID = req.query.n;
  //console.log("req ",req);
  //console.log("whats id",my_ID);
  Cabin.find({ flightID: my_ID.toString() }).then((result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
    //console.log("result ", result);
  });
};

const getArrivalCabins = (req, res) => {
  const my_ID = req.query.n;
  //console.log("req ",req);
  //console.log("whats id",my_ID);
  Cabin.find({ flightID: my_ID.toString() }).then((result) => {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(result, null, 4));
  });
};

module.exports = {
  getDepartureFlights,
  getArrivalFlights,
  getDepartureCabins,
  getArrivalCabins,
  router,
};
