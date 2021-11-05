const express = require('express');
const router = express.Router();
const app = express();

//models
const Flight = require('../models/flight.js')

//middlewares
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// form submission
router.get('/',(req,res)=>{
    res.render('create.ejs');
});

//inserts flights into database
router.post("/",function(req,res){
    
    var from = req.body.from;
    var To = req.body.To;
    var FlightDate = req.body.FlightDate;
    var EconomySeatsAvailable = req.body.EconomySeatsAvailable;
    var BusinessSeatsAvailable = req.body.BusinessSeatsAvailable;
    var FirstSeatsAvailable = req.body.FirstSeatsAvailable;
    var FlightNumber = req.body.FlightNumber;

    var new_flight={
        From: from,
        To:To,
        FlightDate: FlightDate,
        EconomySeatsAvailable:EconomySeatsAvailable,
        BusinessSeatsAvailable: BusinessSeatsAvailable,
        FirstSeatsAvailable:FirstSeatsAvailable,
        FlightNumber: FlightNumber
        };

    Flight.insertMany(new_flight);

    res.send("Flight was created successfully!");

});

module.exports = router;