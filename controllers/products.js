const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', { docTitle: 'Add Product', path: 'addProduct' });
};

exports.postProductAndRedirect = (req, res, next) => {
	const product = new Product(
		req.body.productTitle,
		req.body.productPrice,
		req.body.productDescription
	);
	product.save();
	res.redirect('/admin/product-added');
};

exports.getProductAdded = (req, res, next) => {
	res.render('product-added', {
		docTitle: 'Product Added',
		path: 'productAdded',
	});
};

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		res.render('shop', { prods: products, docTitle: 'Shop', path: 'shop' });
	});
};
