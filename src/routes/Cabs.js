// routes/cabs.js
const express = require('express');
const router = express.Router();
const Cab = require('./models/cab');

// Route to list available cabs
// routes/cabs.js

// Route to list all cabs (admin functionality)
router.get('/', async (req, res) => {
  try {
    const allCabs = await Cab.find();
    if (!allCabs || allCabs.length === 0) {
      // If no cabs are found, send a custom not found response
      return res.status(404).json({ error: 'No cabs found' });
    }
    res.json(allCabs);
  } catch (error) {
    console.error('Error listing all cabs:', error);
    res.status(500).json({ error: 'Failed to retrieve cab details' });
  }
});


module.exports = router;
