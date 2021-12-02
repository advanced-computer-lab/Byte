const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();
const app = express();
var jsonParser = bodyParser.json()
//models
const Flight = require('../models/flight.js');
const Cabin = require('../models/cabin.js');
//middlewares
router.use(express.urlencoded({ extended: true }));
router.use(express.json());




const searchFlightOp = (req,res) =>{
    console.log(req.query.date);
    //output
    var searchResultFlights=[];
    var currentCountry=req.query.from;
    var destination=req.query.to;
    var departureDate=req.query.depDate;
    var returnDate=req.query.returnDate;
    var adults=req.query.adultNo;
    var children=req.query.childrenNo;
    var infants=req.query.infantsNo;
    var classCh=req.query.classChosen;
    var passengers=adults+children;

    var flightWithoutClass;

    Flight.find({To: destination , From: currentCountry, FlightDate: departureDate }).then((result) => {
      flightWithoutClass = result;

    });

    for (var i = 0; i < flightWithoutClass.length; i++){
        var t = {
            flightnumber: 0,
            from: '',
            to: '',
            date: '',
            price: '',
            departure: '',
            arrival: '',
            duration:'',
            cabinClass: '',
          };
        
          if(classCh== '0')
            {  t.cabinClass ="first class"; }
          else if(classCh== '1'){
              t.cabinClass= "Bussiness class";
          }
          else {
            t.cabinClass="economy class";
          }

        var flightID=flightWithoutClass[i].number;
         Cabin.find({ _id: flightID ,seats: { $gte: passengers - 1 },class:classCh }).then((resultsz) => {
             t.price=resultsz[0]*passengers;  
             console.log(resultsz[0].number);
             console.log("flight without cabin");
        });

         Flight.find({ _id: flightID }).then((resultss) => {
            t.flightnumber = resultss[0].number;
            t.from = resultss[0].from;
            t.to = resultss[0].to;
            t.date = resultss[0].date;
            t.arrival = resultss[0].arrival;
            t.departure = resultss[0].departure;
            searchResultFlights.push(t);

          });

    }

    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(searchResultFlights, null, 4));

};



const searchFlightReturn = (req,res) => {
    console.log(req.query.date);

  var returnflightWithoutClass;
  //output
  var searchResultFlights=[];
  var returnFlights=[];

  var currentCountry=req.query.from;
  var destination=req.query.to;
  var departureDate=req.query.depDate;
  var returnDate=req.query.returnDate;
  var adults=req.query.adultNo;
  var children=req.query.childrenNo;
  var infants=req.query.infantsNo;
  var classCh=req.query.classChosen;
  var passengers=adults+children;

    Flight.find({To: currentCountry , From: destination, FlightDate: returnDate }).then((result) => {
        returnflightWithoutClass = result;
        console.log(result[0].number);
        console.log("flight without cabin");

    });

    for (var i = 0; i < returnflightWithoutClass.length; i++){
        console.log("entered the for loop");
        var t = {
            flightnumber: 0,
            from: '',
            to: '',
            date: '',
            price: '',
            departure: '',
            arrival: '',
            duration:'',
            cabinClass: '',
          };
        
          if(classCh==0)
            {  t.cabinClass ="first class"; }
          else if(classCh==1){
              t.cabinClass= "Bussiness class";
          }
          else {
            t.cabinClass="economy class";
          }

        var flightID=returnflightWithoutClass[i].number;
         Cabin.find({ _id: flightID ,seats: { $gte: passengers - 1 },class:classCh }).then((resultsz) => {
             t.price=resultsz[0]*passengers;  

        });

         Flight.find({ _id: flightID }).then((resultss) => {
            t.flightnumber = resultss[0].number;
            t.from = resultss[0].from;
            t.to = resultss[0].to;
            t.date = resultss[0].date;
            t.arrival = resultss[0].arrival;
            t.departure = resultss[0].departure;
            returnFlights.push(t);
          });

        }

        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(returnFlights, null, 4));
};


module.exports = {
    router,
    searchFlightOp,
    searchFlightReturn
  };