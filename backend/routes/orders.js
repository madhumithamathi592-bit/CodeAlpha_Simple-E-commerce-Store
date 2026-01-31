const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// test route
router.get("/", async (req, res) => {
  res.json({ message: "Orders route working" });
});

module.exports = router;
