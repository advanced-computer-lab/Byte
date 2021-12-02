const express=require('express');
const searchController=require('../Controllers/searchController');
const searchRouter=express.Router();

searchRouter.use(express.json());
searchRouter.use(express.urlencoded({extended: false}));

searchRouter.get('/departureResults',searchController.searchFlightOp);
searchRouter.get('/returnResults',searchController.searchFlightReturn);


module.exports = searchRouter;