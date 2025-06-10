// middleware/auth.js
// Auth middleware to check for Authorization header

function auth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader !== 'Bearer secret123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

module.exports = auth; 