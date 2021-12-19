const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.models = {};
mongoose.modelSchemas = {};

const cabinSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    class: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    flightID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flight',
    },
  },
  { timestamps: true }
);

const Cabin = mongoose.model('Cabin', cabinSchema);
module.exports = Cabin;
