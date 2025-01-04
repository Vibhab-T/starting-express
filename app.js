const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

app.listen(3000);

app.use(bodyParser.urlencoded());

app.use(adminRoutes);

app.use(userRoutes);
