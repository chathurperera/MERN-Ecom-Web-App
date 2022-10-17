const express = require("express");
const router = express.Router();
const { createAddress, getMyAddress } = require("../controllers/address");
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAuthorization, createAddress);
router.get("/", verifyTokenAndAuthorization, getMyAddress);

module.exports = router;
