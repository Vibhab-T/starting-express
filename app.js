const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .send(
      "<hmtl><body><h1>ERROR 404:</h1><h2>Page Not Found!</h2></body></hmtl>"
    );
});
