const express = require("express");
const router = express.Router();
const { createOrder , getUserOrders } = require("../controllers/order");
const { verifyToken } = require("../middleware/verifyToken");

router.post("/", verifyToken, createOrder);
router.get("/:id", verifyToken, getUserOrders);

module.exports = router;
