const express = require("express");
const path = require("path");
const dirName = require("../utility/path");

const router = express.Router();

const adminData = require("./admin.js");

router.use("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop" });
});

module.exports = router;
