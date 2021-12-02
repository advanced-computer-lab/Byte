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

////insert booking for that user
var bookingData = {
    number: 2,
    price: 400,
    num_of_passengers : 1,
    chosen_seats : [1],
    flightID : "61a7a6e4745b90535a56bbd4", //flight 1
    userID : "61a1254a54b92bf1ce379585", //my id
    cabinID : "61a7a7c5885f9e4409d20461", //First class of flight 1
};

// var bookingData = {
//   number: 3,
//   price: 500,
//   num_of_passengers: 1,
//   chosen_seats: [1],
//   flightID: '61a7a6e4745b90535a56bbd5', //flight 2
//   userID: '61a1254a54b92bf1ce379585', //my id
//   cabinID: '61a7a7c5885f9e4409d20464', //First class of flight 2
// };

Booking.insertMany(bookingData).catch(console.error);
