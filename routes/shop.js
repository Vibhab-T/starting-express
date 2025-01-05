const express = require("express");
const path = require("path");
const dirName = require("../utility/path");

const router = express.Router();

const adminData = require("./admin.js");

router.use("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(dirName, "views", "shop.html"));
});

module.exports = router;
