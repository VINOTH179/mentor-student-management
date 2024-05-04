const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./Data/DB');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Import routes
// Define other routes here if needed

// Define root route
app.get('/', (req, res) => {
  res.send('App is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
