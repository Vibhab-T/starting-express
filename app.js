const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(
    '<html><body><form action="/product" method="POST"><input type="text" name="productTitle"><button type="submit">Add Product</button></form></body></html>'
  );
});

//app.post is just app.use for post requests. similarly, app.get
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/  ");
});

app.use("/", (req, res, next) => {
  res.send("<html><body><h1>Hello From Express</h1></body></html>");
});
