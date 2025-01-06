const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const userRoutes = require("./routes/shop");

const app = express();

// app.engine("handlebars", expressHbs.engine()); //handlebars init
// app.set("view engine", "handlebars");

app.set("view engine", "pug"); //pug init
app.set("views", "views");

app.listen(3000);

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).render("error-404", { docTitle: "Error 404, Not Found" });
});
