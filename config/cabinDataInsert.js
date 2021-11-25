const { isValidObjectId } = require('mongoose');
const Cabin = require('../models/Cabin');
const connectDB = require('./db');

//connect Database
connectDB();

var cabinData = [
    {
        price:200,
        class:0, //first class
        seats:6,
        flightID: "619fd3ba289c07161c66959f", //flightnumber 1
    },
    {
        price:150,
        class:1, //buisness class
        seats:10,
        flightID: "619fd3ba289c07161c66959f", //flightnumber 1
    },
    {
        price:80,
        class:2, //economy class
        seats:20,
        flightID: "619fd3ba289c07161c66959f", //flightnumber 1
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695a0", //flightnumber 2
    },
    {
        price:150,
        class:1, //buisness class
        seats:15,
        flightID: "619fd3ba289c07161c6695a0", //flightnumber 2
    },
    {
        price:80,
        class:2, //economy class
        seats:30,
        flightID: "619fd3ba289c07161c6695a0", //flightnumber 2
    },
    {
        price:200,
        class:0, //first class
        seats:5,
        flightID: "619fd3ba289c07161c6695a1", //flightnumber 3
    },
    {
        price:150,
        class:1, //buisness class
        seats:2,
        flightID: "619fd3ba289c07161c6695a1", //flightnumber 3
    },
    {
        price:80,
        class:2, //economy class
        seats:22,
        flightID: "619fd3ba289c07161c6695a1", //flightnumber 3
    },
    {
        price:200,
        class:0, //first class
        seats:1,
        flightID: "619fd3ba289c07161c6695a2", //flightnumber 4
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695a2", //flightnumber 4
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695a2", //flightnumber 4
    },
    {
        price:200,
        class:0, //first class
        seats:10,
        flightID: "619fd3ba289c07161c6695a3", //flightnumber 5
    },
    {
        price:150,
        class:1, //buisness class
        seats:22,
        flightID: "619fd3ba289c07161c6695a3", //flightnumber 5
    },
    {
        price:80,
        class:2, //economy class
        seats:50,
        flightID: "619fd3ba289c07161c6695a3", //flightnumber 5
    },
    {
        price:200,
        class:0, //first class
        seats:10,
        flightID: "619fd3ba289c07161c6695a4", //flightnumber 6
    },
    {
        price:150,
        class:1, //buisness class
        seats:22,
        flightID: "619fd3ba289c07161c6695a4", //flightnumber 6
    },
    {
        price:80,
        class:2, //economy class
        seats:50,
        flightID: "619fd3ba289c07161c6695a4", //flightnumber 6
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695a5", //flightnumber 7
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695a5", //flightnumber 7
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695a5", //flightnumber 7
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695a6", //flightnumber 8
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695a6", //flightnumber 8
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695a6", //flightnumber 8
    },
    {
        price:200,
        class:0, //first class
        seats:3,
        flightID: "619fd3ba289c07161c6695a7", //flightnumber 9
    },
    {
        price:150,
        class:1, //buisness class
        seats:13,
        flightID: "619fd3ba289c07161c6695a7", //flightnumber 9
    },
    {
        price:80,
        class:2, //economy class
        seats:30,
        flightID: "619fd3ba289c07161c6695a7", //flightnumber 9
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695a8" //flightnumber 10
    },
    {
        price:150,
        class:1, //buisness class
        seats:16,
        flightID: "619fd3ba289c07161c6695a8", //flightnumber 10
    },
    {
        price:80,
        class:2, //economy class
        seats:60,
        flightID: "619fd3ba289c07161c6695a8", //flightnumber 10
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695a9", //flightnumber 11
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695a9", //flightnumber 11
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695a9", //flightnumber 11
    },
    {
        price:200,
        class:0, //first class
        seats:6,
        flightID: "619fd3ba289c07161c6695aa", //flightnumber 12
    },
    {
        price:150,
        class:1, //buisness class
        seats:10,
        flightID: "619fd3ba289c07161c6695aa", //flightnumber 12
    },
    {
        price:80,
        class:2, //economy class
        seats:22,
        flightID: "619fd3ba289c07161c6695aa", //flightnumber 12
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695ab", //flightnumber 13
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695ab", //flightnumber 13
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695ab", //flightnumber 13
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "619fd3ba289c07161c6695ac", //flightnumber 14
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "619fd3ba289c07161c6695ac", //flightnumber 14
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "619fd3ba289c07161c6695ac", //flightnumber 14
    },
  
];

Cabin.insertMany(cabinData).catch(console.error);
