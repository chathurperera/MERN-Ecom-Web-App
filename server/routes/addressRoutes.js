const express = require("express");
const router = express.Router();
const {createAddress} = require('../controllers/address')
const { verifyTokenAndAuthorization } = require("../middleware/verifyToken");


router.post("/",verifyTokenAndAuthorization,createAddress );

module.exports = router;