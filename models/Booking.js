const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    num_of_passengers: {
      type: Number,
      required: true,
    },
    chosen_seats: {
      type: Array ,
      required: true
    },
    flightID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }, 
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cabinID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cabin'
    },
  }, { timestamps: true });
  
  const Booking = mongoose.model('Booking', bookingSchema);
  module.exports = Booking;