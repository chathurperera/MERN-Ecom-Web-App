const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/verifyToken");
const { createCart } = require("../controllers/cart");

router.post("/", verifyToken, createCart);

module.exports = router;
