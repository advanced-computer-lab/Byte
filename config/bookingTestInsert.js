const Booking = require('../models/Booking');
const connectDB = require('../config/db');

//connect Database
connectDB();

var bookingTest = {
    number: 1,
    price: 300,
    num_of_passengers : 1,
    chosen_seats : [1],
    flightID : "619fd3ba289c07161c66959f", //flight 1
    userID : "619fd4465705b7f148f6acae", //admin ID
    cabinID : "619fd73a2bf15a226afe14eb", //First class of flight 1
};

Booking.insertMany(bookingTest).catch(console.error);