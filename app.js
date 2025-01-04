const express = require("express");

const app = express();

app.listen(3000);

app.use((req, res, next) => {
  console.log("In the first middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In the second middleware!");
  res.send("<h1>Hello From Express</h1>");
});
