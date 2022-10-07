const express = require("express");
const router = express.Router();
const { login, signUp, updateUser } = require("../controllers/user");

router.post("/login", login);
router.post("/signup", signUp);
router.patch("/update", updateUser);

module.exports = router;
