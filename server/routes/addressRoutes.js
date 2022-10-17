const express = require("express");
const router = express.Router();
const { createAddress, getMyAddress } = require("../controllers/address");
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../middleware/verifyToken");

router.post("/", verifyToken, createAddress);
router.get("/", verifyToken, getMyAddress);

module.exports = router;
