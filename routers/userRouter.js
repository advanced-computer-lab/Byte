const express = require('express');
const userController = require('../Controllers/userController');
const userRouter = express.Router();

userRouter.use(express.json());
userRouter.use(express.urlencoded({extended: false}));

userRouter.get('/list', userController.getAllUsers);
userRouter.post('/sendCancellationMail', userController.sendCancellationMail);
userRouter.get('/reservations', userController.getAllReservations);
userRouter.post('/cancelReservation', userController.cancelReservation);

module.exports = userRouter;