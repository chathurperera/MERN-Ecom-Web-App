const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require("../controllers/order");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/", verifyToken, createOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/:id", verifyToken, getUserOrders);

module.exports = router;
