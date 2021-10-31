const Flight = require('../models/Flight');
const connectDB = require('./db');

//connect Database
connectDB();

var flightData = [
  {
      "From": "LAX",
      "To": "JFK",
      "FlightDate": "12-1-2022",
      "EconomySeatsAvailable": 20,
      "BusinessSeatsAvailable": 10,
      "FirstSeatsAvailable": 6,
      "FlightNumber": 1
  },
  {
      "From": "JFK",
      "To": "LAX",
      "FlightDate": "22-1-2022",
      "EconomySeatsAvailable": 30,
      "BusinessSeatsAvailable": 15,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 2
  },
  {
      "From": "JFK",
      "To": "LHR",
      "FlightDate": "21-2-2022",
      "EconomySeatsAvailable": 22,
      "BusinessSeatsAvailable": 2,
      "FirstSeatsAvailable": 5,
      "FlightNumber": 3
  },
  {
      "From": "LHR",
      "To": "JFK",
      "FlightDate": "6-3-2022",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 4
  },
  {
      "From": "CAI",
      "To": "DXB",
      "FlightDate": "10-4-2022",
      "EconomySeatsAvailable": 50,
      "BusinessSeatsAvailable": 22,
      "FirstSeatsAvailable": 10,
      "FlightNumber": 5
  },
  {
      "From": "DXB",
      "To": "CAI",
      "FlightDate": "18-4-2022",
      "EconomySeatsAvailable": 50,
      "BusinessSeatsAvailable": 22,
      "FirstSeatsAvailable": 10,
      "FlightNumber": 6
  },
  {
      "From": "CDG",
      "To": "MUC",
      "FlightDate": "25-4-2022",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 7
  },
  {
      "From": "MUC",
      "To": "CDG",
      "FlightDate": "2-5-2022",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 8
  },
  {
      "From": "LHR",
      "To": "CDG",
      "FlightDate": "6-5-2022",
      "EconomySeatsAvailable": 30,
      "BusinessSeatsAvailable": 13,
      "FirstSeatsAvailable": 3,
      "FlightNumber": 9
  },
  {
      "From": "CDG",
      "To": "LHR",
      "FlightDate": "17-5-2022",
      "EconomySeatsAvailable": 60,
      "BusinessSeatsAvailable": 16,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 10
  },
  {
      "From": "CAI",
      "To": "RUH",
      "FlightDate": "6-6-2022",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 11
  },
  {
      "From": "RUH",
      "To": "CAI",
      "FlightDate": "16-6-2022",
      "EconomySeatsAvailable": 22,
      "BusinessSeatsAvailable": 10,
      "FirstSeatsAvailable": 6,
      "FlightNumber": 12
  },
  {
      "From": "YYZ",
      "To": "FRA",
      "FlightDate": "7-7-2020",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 13
  },
  {
      "From": "FRA",
      "To": "YYZ",
      "FlightDate": "8-8-2022",
      "EconomySeatsAvailable": 43,
      "BusinessSeatsAvailable": 26,
      "FirstSeatsAvailable": 16,
      "FlightNumber": 14
  },
  
];

Flight.insertMany(flightData).catch(console.error);