// /app.js
const express = require('express');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Connect to the MongoDB database
connectDB();

// Middleware to parse JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', bookingRoutes);
// Enable CORS for cross-origin requests (if needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Define your API endpoints and routes here
// For example:
app.get('/cabs', (req, res) => {
  // Implement logic to fetch and send cab data
  res.json({ message: 'Listing cabs' });
});

// Define more API endpoints for booking cabs, managing cabs, etc.

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.js
// ...

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  