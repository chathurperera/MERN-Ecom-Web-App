const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/order");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/", verifyToken, createOrder);

module.exports = router;
