// routes/cabs-admin.js
const express = require('express');
const router = express.Router();
const Cab = require('../models/cab');

// Route to list all cabs (admin functionality)
router.get('/', async (req, res) => {
  try {
    const allCabs = await Cab.find();
    res.json(allCabs);
  } catch (error) {
    console.error('Error listing all cabs:', error);
    res.status(500).json({ error: 'Failed to retrieve cab details' });
  }
});

// Route to update cab details (admin functionality)
router.put('/:cabId', async (req, res) => {
  try {
    const { cabId } = req.params;
    const updatedData = req.body; // Data to be updated
    const updatedCab = await Cab.findByIdAndUpdate(cabId, updatedData, { new: true });

    if (!updatedCab) {
      return res.status(404).json({ error: 'Cab not found' });
    }

    res.json(updatedCab);
  } catch (error) {
    console.error('Error updating cab details:', error);
    res.status(500).json({ error: 'Failed to update cab details' });
  }
});

module.exports = router;
