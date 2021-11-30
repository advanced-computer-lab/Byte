const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  bag_allowance: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;























//old

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const flightSchema = new Schema({
//   From: {
//     type: String,
//     required: true,
//   },
//   To: {
//     type: String,
//     required: true
//   },
//   FlightDate: {
//     type: String,
//     required: true,
//   },
//   EconomySeatsAvailable: {
//     type: Number,
//     required: true,
//   },
//   BusinessSeatsAvailable: {
//     type: Number,
//     required: true,
//   },
//   FirstSeatsAvailable: {
//     type: Number,
//     required: true,
//   },
//   FlightNumber: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
// }, { timestamps: true });

// const Flight = mongoose.model('Flight', flightSchema);
// module.exports = Flight;