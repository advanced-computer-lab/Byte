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
        flightID: "61a7a6e4745b90535a56bbd4", //flightnumber 1
    },
    {
        price:150,
        class:1, //buisness class
        seats:10,
        flightID: "61a7a6e4745b90535a56bbd4", //flightnumber 1
    },
    {
        price:80,
        class:2, //economy class
        seats:20,
        flightID: "61a7a6e4745b90535a56bbd4", //flightnumber 1
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbd5", //flightnumber 2
    },
    {
        price:150,
        class:1, //buisness class
        seats:15,
        flightID: "61a7a6e4745b90535a56bbd5", //flightnumber 2
    },
    {
        price:80,
        class:2, //economy class
        seats:30,
        flightID: "61a7a6e4745b90535a56bbd5", //flightnumber 2
    },
    {
        price:200,
        class:0, //first class
        seats:5,
        flightID: "61a7a6e4745b90535a56bbd6", //flightnumber 3
    },
    {
        price:150,
        class:1, //buisness class
        seats:2,
        flightID: "61a7a6e4745b90535a56bbd6", //flightnumber 3
    },
    {
        price:80,
        class:2, //economy class
        seats:22,
        flightID: "61a7a6e4745b90535a56bbd6", //flightnumber 3
    },
    {
        price:200,
        class:0, //first class
        seats:1,
        flightID: "61a7a6e4745b90535a56bbd7", //flightnumber 4
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbd7", //flightnumber 4
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbd7", //flightnumber 4
    },
    {
        price:200,
        class:0, //first class
        seats:10,
        flightID: "61a7a6e4745b90535a56bbd8", //flightnumber 5
    },
    {
        price:150,
        class:1, //buisness class
        seats:22,
        flightID: "61a7a6e4745b90535a56bbd8", //flightnumber 5
    },
    {
        price:80,
        class:2, //economy class
        seats:50,
        flightID: "61a7a6e4745b90535a56bbd8", //flightnumber 5
    },
    {
        price:200,
        class:0, //first class
        seats:10,
        flightID: "61a7a6e4745b90535a56bbd9", //flightnumber 6
    },
    {
        price:150,
        class:1, //buisness class
        seats:22,
        flightID: "61a7a6e4745b90535a56bbd9", //flightnumber 6
    },
    {
        price:80,
        class:2, //economy class
        seats:50,
        flightID: "61a7a6e4745b90535a56bbd9", //flightnumber 6
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbda", //flightnumber 7
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbda", //flightnumber 7
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbda", //flightnumber 7
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbdb", //flightnumber 8
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbdb", //flightnumber 8
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbdb", //flightnumber 8
    },
    {
        price:200,
        class:0, //first class
        seats:3,
        flightID: "61a7a6e4745b90535a56bbdc", //flightnumber 9
    },
    {
        price:150,
        class:1, //buisness class
        seats:13,
        flightID: "61a7a6e4745b90535a56bbdc", //flightnumber 9
    },
    {
        price:80,
        class:2, //economy class
        seats:30,
        flightID: "61a7a6e4745b90535a56bbdc", //flightnumber 9
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbdd" //flightnumber 10
    },
    {
        price:150,
        class:1, //buisness class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbdd", //flightnumber 10
    },
    {
        price:80,
        class:2, //economy class
        seats:60,
        flightID: "61a7a6e4745b90535a56bbdd", //flightnumber 10
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbde", //flightnumber 11
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbde", //flightnumber 11
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbde", //flightnumber 11
    },
    {
        price:200,
        class:0, //first class
        seats:6,
        flightID: "61a7a6e4745b90535a56bbdf", //flightnumber 12
    },
    {
        price:150,
        class:1, //buisness class
        seats:10,
        flightID: "61a7a6e4745b90535a56bbdf", //flightnumber 12
    },
    {
        price:80,
        class:2, //economy class
        seats:22,
        flightID: "61a7a6e4745b90535a56bbdf", //flightnumber 12
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbe0", //flightnumber 13
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbe0", //flightnumber 13
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbe0", //flightnumber 13
    },
    {
        price:200,
        class:0, //first class
        seats:16,
        flightID: "61a7a6e4745b90535a56bbe1", //flightnumber 14
    },
    {
        price:150,
        class:1, //buisness class
        seats:26,
        flightID: "61a7a6e4745b90535a56bbe1", //flightnumber 14
    },
    {
        price:80,
        class:2, //economy class
        seats:43,
        flightID: "61a7a6e4745b90535a56bbe1", //flightnumber 14
    },
  
];

Cabin.insertMany(cabinData).catch(console.error);
