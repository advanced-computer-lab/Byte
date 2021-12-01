const express = require('express');
const flightController = require('../Controllers/flightController');
const createFlightsController = require('../Controllers/createFlightsController');
const searchController = require('../Controllers/searchController');
const updateflightController = require('../Controllers/updateflightController');
const adminRouter = express.Router();

adminRouter.use(express.json());
adminRouter.use(express.urlencoded({ extended: false }));

// router.get('/user', userController);
// router.get('/create', createFlightsController);
// router.get('/search', searchController);
// router.get('/updateflight',updateflightController);

adminRouter.get('/list', flightController.getAllFlights);
adminRouter.post('/create', createFlightsController.create);
adminRouter.get('/search', searchController.search);
adminRouter.post('/update', updateflightController.update);
adminRouter.post('/delete', flightController.fdelete);

module.exports = adminRouter;
