const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST"><input type="text" name="productTitle"><button type="submit">Add Product</button></form></body></html>'
  );
});

router.use("/product-added", (req, res, next) => {
  res.send("<html><body><h1>PRODUCT ADDED</h1></body></html>");
});

//app.post or router.post is just app.use for post requests. similarly, app.get
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/product-added");
});

module.exports = router;
