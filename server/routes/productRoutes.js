const express = require("express");
const router = express.Router();
const { createProduct, getAllProducts } = require("../controllers/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyToken");

router.post("/", verifyTokenAndAdmin , createProduct);
router.get("/", getAllProducts);

module.exports = router;
