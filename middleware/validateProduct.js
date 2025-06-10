// middleware/validateProduct.js
// Middleware to validate product data for POST and PUT requests

function validateProduct(req, res, next) {
  const { name, price } = req.body;
  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Product name is required and must be a non-empty string.' });
  }
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Product price is required and must be a positive number.' });
  }
  next();
}

module.exports = validateProduct; 