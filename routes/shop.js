const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

const adminData = require('../controllers/products');

router.get('/', productsController.getProducts);

module.exports = router;
