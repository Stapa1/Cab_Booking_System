const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  cab: { type: mongoose.Schema.Types.ObjectId, ref: 'Cab' },
  source: String,
  destination: String,
  startTime: Date,
  endTime: Date,
  // Add other properties as needed
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
