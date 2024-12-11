// routes/categories.js
const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const category = await Product.distinct('category');
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: 'Error fetching category: ' + err.message });
  }
});

module.exports = router;
