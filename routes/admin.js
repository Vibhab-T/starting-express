const express = require('express');
const path = require('path');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postProductAndRedirect);

router.get('/product-added', productsController.getProductAdded);

module.exports = router;
