const User = require('../models/user');
const Booking = require('../models/booking');
const connectDB = require('./db');

//connect Database
connectDB();

//insert an existing user
// var userData = {
//     first_name : "Dinah",
//     last_name : "W",
//     passport_number : "K12355499",
//     email : "dinahwaref@gmail.com",
//     username : "dinah",
//     address : "123,Gotham street,Gotham",
//     code : 66,
//     password : "dinah",
//     type : 1

// };
// User.insertMany(userData).catch(console.error);

//insert booking for that user
// var bookingData = {
//     number: 2,
//     price: 400,
//     num_of_passengers : 1,
//     chosen_seats : [1],
//     flightID : "619fd3ba289c07161c6695a0", //flight 2
//     userID : "61a1254a54b92bf1ce379585", //my id
//     cabinID : "619fd73a2bf15a226afe14ee", //First class of flight 2
// };

var bookingData = {
  number: 3,
  price: 500,
  num_of_passengers: 1,
  chosen_seats: [1],
  flightID: '619fd3ba289c07161c6695a1', //flight 3
  userID: '61a1254a54b92bf1ce379585', //my id
  cabinID: '619fd73a2bf15a226afe14f1', //First class of flight 3
};

Booking.insertMany(bookingData).catch(console.error);
