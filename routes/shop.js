const express = require("express");
const path = require("path");
const dirName = require("../utility/path");

const router = express.Router();

const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: "shop" });
});

module.exports = router;
