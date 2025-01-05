const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error-404.html"));
});
