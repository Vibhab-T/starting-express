const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<html><body><h1>Hello From Express</h1></body></html>");
});

module.exports = router;
