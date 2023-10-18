const mongoose = require('mongoose');

// Your MongoDB Atlas connection string (replace with your actual connection string)
const connectionString = 'mongodb+srv://pavansaivishnuvardhang:ku7VwTsssvhveDrR@cluster0.2jrmqt0.mongodb.net/?retryWrites=true&w=majority';

// Create a function to test the connection
const testMongoDBConnection = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

// Call the test function
testMongoDBConnection();
