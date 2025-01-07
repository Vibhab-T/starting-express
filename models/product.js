const fs = require('fs');
const path = require('path');

const filePath = path.join(
	path.dirname(process.mainModule.filename),
	'data',
	'products.json'
);

module.exports = class Product {
	constructor(title, price, description) {
		this.title = title;
		this.price = price;
		this.description = description;
	}

	save() {
		fs.readFile(filePath, (err, fileContent) => {
			let products = [];
			if (!err) {
				products = JSON.parse(fileContent);
			}
			products.push(this);
			fs.writeFile(filePath, JSON.stringify(products), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(callback) {
		fs.readFile(filePath, (err, fileContent) => {
			if (err) {
				callback([]);
			}
			callback(JSON.parse(fileContent));
		});
	}
};
