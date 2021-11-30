const express = require('express');
const router = express.Router();
const app = express();

const Flight = require('../models/flight.js');

app.set('view engine','ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
var flightnumber=0;
router.get('/',(req,res)=>{
    flightnumber=req.query.FlightNumber;
    console.log(flightnumber);
    res.render('updateflight.ejs',{flightnumber});
});
//console.log("righttt");
router.post('/',function (req, res)

{
    console.log(req.body.From);
  
     Flight.replaceOne({FlightNumber:flightnumber},
     {
            From: req.body.From,
            To: req.body.To,
            FlightDate : req.body.FlightDate,
            EconomySeatsAvailable:req.body.EconomySeatsAvailable,
            BusinessSeatsAvailable: req.body.BusinessSeatsAvailable,
            FirstSeatsAvailable:req.body. FirstSeatsAvailable,
            FlightNumber: req.body.FlightNumber,
            

        }
        
    ).then((result)=>{
        res.send("Flight was updated successfully!");
    })

});

module.exports = router;
