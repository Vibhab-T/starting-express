const express = require("express");
const path = require("path");
const dirName = require("../utility/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "Add Product", path: "addProduct" });
});

router.get("/product-added", (req, res, next) => {
  res.render("product-added", { docTitle: "Product Added" });
});

//app.post or router.post is just app.use for post requests. similarly, app.get
router.post("/product", (req, res, next) => {
  products.push({
    title: req.body.productTitle,
    price: req.body.productPrice,
    description: req.body.productDescription,
  });
  res.redirect("/admin/product-added");
});

exports.routes = router;
exports.products = products;
