const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  updateProduct,
} = require("../controllers/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getAllProducts);
router.patch("/", verifyTokenAndAdmin, updateProduct);

module.exports = router;
