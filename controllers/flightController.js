const express = require('express');
const router = express.Router();
const app = express();

const Flight = require('../models/flight.js')

//middlewares
router.use(express.urlencoded({extended: true})); 
router.use(express.json());

//returns all flights in database
const getAllFlights=(req,res)=>
{
    Flight.find({}).then((result)=>{
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
};



    //console.log(all_flights);
    //res.render('\list', {all_flights});

    router.get('/delete',(req,res)=>{

     Flight.remove({ FlightNumber: req.query.flight }, function(err) {
          if (!err) {
              res.send("Deleted Successfully!");
                  }              
           else {
             res.send("Something went wrong!");
          }
       });
             
            
         
});

module.exports = 
{
    getAllFlights, 
    router
};