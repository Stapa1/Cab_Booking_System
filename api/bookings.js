// bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking'); // Import your Booking model

// Route to handle /api/bookings endpoint (GET request to retrieve bookings)
router.get('/', async (req, res) => {
  try {
    // Retrieve bookings from the database (example using Mongoose)
    const bookings = await Booking.find();

    // Send the list of bookings as JSON response
    res.json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
});

// Route to handle creating a new booking (POST request)
router.post('/', async (req, res) => {
  try {
    // Extract booking data from the request body
    const { user, source, destination } = req.body;

    // Create a new booking record (example using Mongoose)
    const newBooking = new Booking({
      user,
      source,
      destination,
      // Additional booking-related data
    });

    // Save the new booking to the database
    await newBooking.save();

    // Send a success response
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Additional booking-related routes can be defined here

module.exports = router;
