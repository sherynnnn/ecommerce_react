// routes/categories.js
const express = require('express');
const Product = require('../models/product');
const router = express.Router();


router.get('/by-category', async (req, res) => {
    const category = req.query.category;
    try {
      const products = await Product.find({ category });
      res.status(200).json(products);
    } catch (err) {
      res.status(400).send({ error: 'Error fetching products by category: ' + err.message });
    }
  });
  

module.exports = router;
