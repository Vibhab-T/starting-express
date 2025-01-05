const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.listen(3000);

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error-404.html"));
});
