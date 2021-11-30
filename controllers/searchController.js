const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();
const app = express();
var jsonParser = bodyParser.json()
//models
const Flight = require('../models/flight.js')

//middlewares
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// form submission
router.get('/',(req,res)=>{
    res.render('search.ejs');
});

//inserts flights into dtatabase
router.post("/", jsonParser, function(req,res){
    
    var from = req.body.from;
    var To = req.body.to;
    var FlightDay = req.body.dayNum;
    var FlightMonth = req.body.monthNum;
    var FlightYear = req.body.yearNum;
    var FlightDate = String(FlightDay)+"-"+String(FlightMonth)+"-"+String(FlightYear);
    var classRequested = req.body.class;
    var Flights;

   /* var from= "LAX";
    var To = "JFK";
    var FlightDate = "12-1-2022";
    var classRequested = "economy";*/

    var Flights;
    if (classRequested==="economy"){
      Flight.find({To:To, From:from,  FlightDate:FlightDate,EconomySeatsAvailable:{$gte:0} }).then( Flights => res.render('\searchResult', {Flights})).catch(console.error);
    //console.log("e");
    }
    else if (classRequested==="first"){
        Flight.find({To:To, From:from,  FlightDate:FlightDate,FirstSeatsAvailable:{$gte:0} }).then( Flights => res.render('\searchResult', {Flights})).catch(console.error);

    //console.log("g");
}
    else{
        Flight.find({To:To, From:from,  FlightDate:FlightDate,BusinessSeatsAvailable:{$gte:0} }).then( Flights => res.render('\searchResult', {Flights})).catch(console.error);
        //console.log("p");
    }

});

module.exports = router;