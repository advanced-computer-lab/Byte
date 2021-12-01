const express = require('express');
const router = express.Router();
//const app = express();

//models
const Flight = require('../models/flight.js')

// //middlewares
// app.set('view engine','ejs');
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());

// // form submission
// router.get('/',(req,res)=>{
//     res.render('create.ejs');
// });

//inserts flights into database
const create = (req,res) =>{

    console.log("backend: "+ req.body.from);
    
    var number = req.body.number;
    var from = req.body.from;
    var to = req.body.to;
    var date = req.body.date;
    var arrival = req.body.arrival;
    var departure = req.body.departure;
    var duration = req.body.duration;
    var bag_allowance = req.body.bag_allowance;

    var new_flight={
        number: number,
        from: from,
        to: to,
        date: date,
        arrival: arrival,
        departure: departure,
        duration: duration,
        bag_allowance: bag_allowance,
        };

    Flight.insertMany(new_flight);

    res.send("Flight was created successfully!");

};

module.exports = {create};