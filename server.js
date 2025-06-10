// server.js - Main entry point for the Express Product API

// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const productsRouter = require('./routes/products');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json()); // Built-in body parser
app.use(logger); // Custom logger middleware

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Mount products router
app.use('/api/products', productsRouter);

// Error handling middleware (should be last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 