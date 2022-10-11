const express = require("express");
const router = express.Router();

const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");
const { createCart } = require("../controllers/cart");

router.post("/", verifyTokenAndAuthorization, createCart);


module.exports = router;