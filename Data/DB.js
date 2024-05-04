const mongoose = require('mongoose');

// MongoDB connection options (optional)
const options = {};

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/mentor-student';

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Export the mongoose instance for use in your application
module.exports = mongoose;
