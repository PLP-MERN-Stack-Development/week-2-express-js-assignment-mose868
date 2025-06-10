// routes/products.js
// Express router for /api/products endpoints

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const products = require('../data/products');
const validateProduct = require('../middleware/validateProduct');
const auth = require('../middleware/auth');

const router = express.Router();

// GET /api/products - fetch all products with optional filtering, search, and pagination
router.get('/', (req, res) => {
  let result = [...products];

  // Search by name
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    result = result.filter(p => p.name.toLowerCase().includes(search));
  }

  // Filtering by category or inStock
  if (req.query.category) {
    result = result.filter(p => p.category === req.query.category);
  }
  if (req.query.inStock) {
    result = result.filter(p => String(p.inStock) === req.query.inStock);
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = result.slice(start, end);

  res.json({
    total: result.length,
    page,
    limit,
    products: paginated
  });
});

// GET /api/products/:id - get a single product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// POST /api/products - create a product (auth + validation)
router.post('/', auth, validateProduct, (req, res) => {
  const { name, price, description = '', category = '', inStock = true } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    price,
    description,
    category,
    inStock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - update a product (auth + validation)
router.put('/:id', auth, validateProduct, (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const { name, price, description, category, inStock } = req.body;
  product.name = name;
  product.price = price;
  if (description !== undefined) product.description = description;
  if (category !== undefined) product.category = category;
  if (inStock !== undefined) product.inStock = inStock;
  res.json(product);
});

// DELETE /api/products/:id - delete a product (auth)
router.delete('/:id', auth, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: deleted[0] });
});

module.exports = router; 