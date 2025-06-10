// middleware/errorHandler.js
// Error handling middleware to send JSON error responses

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = errorHandler; 