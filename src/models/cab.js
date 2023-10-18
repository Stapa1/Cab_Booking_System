const mongoose = require('mongoose');

const cabSchema = new mongoose.Schema({
  name: String,
  pricePerMinute: Number,
  // Add other properties as needed
});

const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;
