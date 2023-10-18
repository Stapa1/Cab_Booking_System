const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Route to update cab information
router.put('/cabs/:cabId', async (req, res) => {
  try {
    const { cabId } = req.params; // Retrieve the cab's ID from the route
    const updatedData = req.body; // New cab information

    // Update the cab record in the database
    const updatedCab = await Cab.findByIdAndUpdate(cabId, updatedData, { new: true });

    if (!updatedCab) {
      return res.status(404).json({ error: 'Cab not found' });
    }

    res.json(updatedCab);
  } catch (error) {
    console.error('Error updating cab information:', error);
    res.status(500).json({ error: 'Failed to update cab information' });
  }
});

module.exports = router;
