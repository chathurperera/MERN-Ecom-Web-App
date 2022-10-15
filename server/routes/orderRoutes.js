const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrder,
} = require("../controllers/order");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/", verifyToken, createOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.patch("/:id", verifyTokenAndAdmin, updateOrder);
router.get("/:id", verifyToken, getUserOrders);

module.exports = router;
