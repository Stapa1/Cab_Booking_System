// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('./models/booking');

// Route to book a cab
router.post('/', async (req, res) => {
  try {
    const { email, source, destination } = req.body; // Extract user input from the request
    // Create a new booking record in the database
    const newBooking = new Booking({
      user: email,
      source,
      destination,
      // Additional booking-related data
    });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
