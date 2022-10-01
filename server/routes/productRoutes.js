const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", verifyTokenAndAdmin, updateProduct);

module.exports = router;
