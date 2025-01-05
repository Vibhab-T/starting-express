const express = require("express");
const path = require("path");
const dirName = require("../utility/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "add-product.html"));
});

router.get("/product-added", (req, res, next) => {
  res.sendFile(path.join(dirName, "views", "product-added.html"));
});

//app.post or router.post is just app.use for post requests. similarly, app.get
router.post("/product", (req, res, next) => {
  res.redirect("/admin/product-added");
});

module.exports = router;
