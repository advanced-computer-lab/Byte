const express=require('express');
const flightController=require('../Controllers/flightController');

const flightRouter=express.Router();

flightRouter.use(express.json());
flightRouter.use(express.urlencoded({extended: false}));

flightRouter.get('/list',flightController.getAllFlights);

flightRouter.get('/departure',flightController.getDepartureFlights);
flightRouter.get('/arrival',flightController.getArrivalFlights);
flightRouter.get('/departureCabins',flightController.getDepartureCabins);
flightRouter.get('/arrivalCabins',flightController.getArrivalCabins);




module.exports = flightRouter;