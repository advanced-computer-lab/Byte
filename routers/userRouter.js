const express = require('express');
const userController = require('../Controllers/userController');
const userRouter = express.Router();

userRouter.use(express.json());
userRouter.use(express.urlencoded({ extended: false }));

userRouter.get('/list', userController.getAllUsers);
userRouter.post('/sendCancellationMail', userController.sendCancellationMail);
userRouter.get('/reservations', userController.getAllReservations);
userRouter.post('/cancelReservation', userController.cancelReservation);

userRouter.post('/updateinfo', userController.updateuser);
userRouter.get('/getuser', userController.getuser);

userRouter.post('/signup', userController.signup);
userRouter.post('/signin', userController.signin);
userRouter.post('/logout', userController.logout);
userRouter.post('/pay', userController.pay);

userRouter.get('/getUsername', userController.getUsername);
userRouter.post('/isUserAuth', userController.verifyJWT);

module.exports = userRouter;
