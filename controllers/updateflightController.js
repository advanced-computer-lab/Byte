const express = require('express');
const router = express.Router();
const app = express();

const Flight = require('../models/flight.js');

// app.set('view engine','ejs');
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// var flightnumber=0;
// router.get('/',(req,res)=>{
//     flightnumber=req.query.FlightNumber;
//     console.log(flightnumber);
//     res.render('updateflight.ejs',{flightnumber});
// });
//console.log("righttt");
const update = (req, res) => {

  console.log("Update Funstion: " + req.body.number);

  Flight.replaceOne(
    { number: parseInt(req.body.number) },
    {
      number: parseInt(req.body.number) ,
      from: (req.body.from).toString(),
      to: (req.body.to).toString(),
      date: (req.body.date).toString(),
      arrival: (req.body.arrival).toString(),
      departure: (req.body.departure).toString(),
      duration: (req.body.duration).toString(),
      bag_allowance: (req.body.bag_allowance).toString()
    }
  ).then((result) => {
    res.send('Flight was updated successfully!');
  });
};

module.exports = {update};
