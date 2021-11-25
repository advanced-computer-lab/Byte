const express=require('express');
const flightController=require('../Controllers/flightController');
const flightRouter=express.Router();

flightRouter.use(express.json());
flightRouter.use(express.urlencoded({extended: false}));

flightRouter.get('/list',flightController.getAllFlights);

module.exports = flightRouter;