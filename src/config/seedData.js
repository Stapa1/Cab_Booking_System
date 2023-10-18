const mongoose = require('mongoose');
const Cab = require('./models/cab'); // Import your Mongoose model
const User = require('./models/user');
const Booking = require('./models/booking');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/cab_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define predefined data
const cabData = [
  {
    name: 'Cab 1',
    pricingPerMinute: 5,
  },
  {
    name: 'Cab 2',
    pricingPerMinute: 7,
  },
  {
    name: 'Cab 3',
    pricingPerMinute: 10,
  },
  {
    name: 'Cab 4',
    pricingPerMinute: 8,
  },
  {
    name: 'Cab 5',
    pricingPerMinute: 3,
  },
  {
    name: 'Cab 6',
    pricingPerMinute: 9,
  },

  // Add more cab data as needed
];

// Insert data into the Cab collection
Cab.insertMany(cabData, (error, docs) => {
  if (error) {
    console.error('Error adding predefined cab data:', error);
  } else {
    console.log('Predefined cab data added successfully.');
  }
  mongoose.connection.close(); // Close the database connection
});
