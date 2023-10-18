// /config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://pavansaivishnuvardhang:ku7VwTsssvhveDrRin@cluster0.2jrmqt0.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the application on connection error
  }
};

module.exports = connectDB;

