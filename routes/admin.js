const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.use("/product-added", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "product-added.html"));
});

//app.post or router.post is just app.use for post requests. similarly, app.get
router.post("/product", (req, res, next) => {
  res.redirect("/admin/product-added");
});

module.exports = router;
