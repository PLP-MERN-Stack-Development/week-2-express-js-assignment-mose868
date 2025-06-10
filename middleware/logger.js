// middleware/logger.js
// Logger middleware to log HTTP method and URL

function logger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}

module.exports = logger; 